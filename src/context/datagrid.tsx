import {
  createContext,
  CSSProperties,
  DragEvent,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Density, IPaginationOptions } from 'src/types';

import type {
  ColumnType,
  IDataGridProps,
  RowType,
  SortDirectionType,
  ISortMessageEventData,
  ColumnObjectType,
} from 'src/types';
import { useColumns, useRows } from 'src/utilities/hooks/datagrid/hooks';
import { createColumnMap } from 'src/components/DataGrid/utilities/methods';

type DragCallback = (e: DragEvent<HTMLDivElement>, pos: number) => void;
interface IDatagridContextMethods {
  handleColumnSort: (field: string, direction: SortDirectionType) => void;
  handleHeaderColumnGrab: DragCallback;
  handleHeaderColumnDrop: DragCallback;
  handleDensityChange: (arg: Density) => void;
}
interface IDatagridContext extends IDatagridContextMethods {
  columns: ColumnType[];
  rows: RowType[];
  height: number;
  width: CSSProperties['width'];
  density: Density;
  sortedBy?: string;
  options?: ColumnObjectType;
  loading?: boolean;
  pagination?: IPaginationOptions;
}

interface IDatagridProviderProps extends IDataGridProps {
  children: ReactNode;
}

const voidFn = () => ({});

const initialState: IDatagridContext = {
  rows: [],
  columns: [],
  height: 500,
  width: '100%',
  density: Density.md,
  handleColumnSort: voidFn,
  handleHeaderColumnGrab: voidFn,
  handleHeaderColumnDrop: voidFn,
  handleDensityChange: voidFn,
};

const DatagridContext = createContext<IDatagridContext>(initialState);

export const DatagridProvider = ({
  children,
  rows = [],
  columns,
  width = initialState.width,
  height = initialState.height,
  pagination,
  ...props
}: IDatagridProviderProps) => {
  const { gridRows, originalRows, setGridRows, setOriginalRows } = useRows(
    rows,
    pagination
  );

  const { columnObject, columnsToRender, setColumnObject } =
    useColumns(columns);

  const [sortedBy, setSortedBy] = useState<string>();
  const [density, setDensity] = useState(initialState.density);

  const [sorter, setSorter] = useState<Worker>();

  const handleDensityChange = (d: Density) => {
    setDensity(d);
  };

  const handleColumnSort = (field: string, direction: SortDirectionType) => {
    if (originalRows) {
      const sortData: ISortMessageEventData = {
        rows: originalRows,
        direction,
        field,
      };
      if (pagination) {
        const { page, pageSize, total } = pagination;
        sortData.pagination = { page, pageSize, total };
      }
      if (direction === 'default') {
        setSortedBy(undefined);
        if (columnObject) sortData.columnObject = columnObject;
        sortData.rows = rows;
      }
      if (window.Worker) {
        if (sorter) sorter.postMessage(sortData);
      }
      setSortedBy(field);
    }
  };

  const handleHeaderColumnGrab: DragCallback = (e, pos) => {
    e.dataTransfer.setData('index', pos.toString());
  };

  const handleHeaderColumnDrop: DragCallback = (e, pos) => {
    const draggedIndex = +e.dataTransfer.getData('index');
    if (columnObject) {
      if (pos !== draggedIndex) {
        const newColumns = [...columnsToRender];
        const [draggedColumn] = newColumns.splice(draggedIndex, 1);
        newColumns.splice(pos, 0, draggedColumn);
        const newColumnMap = createColumnMap(newColumns);
        setColumnObject(newColumnMap);
      }
    }
  };

  useEffect(() => {
    setSorter(
      new Worker(new URL('../utilities/workers/sortWorker.ts', import.meta.url))
    );
  }, []);

  useEffect(() => {
    if (sorter)
      sorter.onmessage = function (
        e: MessageEvent<{ data: RowType[]; original?: RowType[] }>
      ) {
        setGridRows(e.data.data);
        setOriginalRows(e.data.original);
      };

    return () => {
      if (sorter) sorter.terminate();
    };
  }, [sorter]);

  return (
    <DatagridContext.Provider
      value={{
        rows: gridRows || rows,
        columns: columnsToRender,
        width,
        height,
        sortedBy,
        options: columnObject,
        pagination,
        handleColumnSort,
        handleHeaderColumnGrab,
        handleHeaderColumnDrop,
        density,
        handleDensityChange,
        ...props,
      }}
    >
      {children}
    </DatagridContext.Provider>
  );
};

export const useDatagrid = () => useContext(DatagridContext);

export default DatagridProvider;
