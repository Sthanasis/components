import {
  createContext,
  CSSProperties,
  DragEvent,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { IPaginationOptions } from 'src/types';

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
import { getSortWorker } from 'src/utilities/workers/getters';
import { DensityMapType, DensityType } from 'src/types/types';

type DragCallback = (e: DragEvent<HTMLDivElement>, pos: number) => void;
interface IDatagridContextMethods {
  handleColumnSort: (field: string, direction: SortDirectionType) => void;
  handleHeaderColumnGrab: DragCallback;
  handleHeaderColumnDrop: DragCallback;
  handleDensityChange: (arg: DensityType) => void;
}
interface IDatagridContext extends IDatagridContextMethods {
  columns: ColumnType[];
  rows: RowType[];
  height: number;
  width: CSSProperties['width'];
  density: DensityType;
  densityOptions: DensityMapType;
  sortedBy?: string;
  options?: ColumnObjectType;
  loading?: boolean;
  pagination?: IPaginationOptions;
}

interface IDatagridProviderProps extends IDataGridProps {
  children: ReactNode;
}

const voidFn = () => ({});
const densityMap: DensityMapType = {
  sm: 30,
  md: 45,
  lg: 60,
};
const initialState: IDatagridContext = {
  rows: [],
  columns: [],
  height: 500,
  width: '100%',
  density: 'md',
  densityOptions: densityMap,
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
  density: densityProp,
  densityOptions,
  ...props
}: IDatagridProviderProps) => {
  const { gridRows, originalRows, setGridRows, setOriginalRows } = useRows(
    rows,
    pagination
  );

  const { columnObject, columnsToRender, setColumnObject } =
    useColumns(columns);

  const [sortedBy, setSortedBy] = useState<string>();
  const [density, setDensity] = useState(densityProp ?? initialState.density);

  const [sorter, setSorter] = useState<Worker>();

  const handleDensityChange = (d: DensityType) => {
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
    const worker = getSortWorker();
    setSorter(worker as Worker);
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
        densityOptions: densityOptions ?? initialState.densityOptions,
        ...props,
      }}
    >
      {children}
    </DatagridContext.Provider>
  );
};

export const useDatagrid = () => useContext(DatagridContext);

export default DatagridProvider;
