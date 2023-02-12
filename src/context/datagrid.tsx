import {
  createContext,
  CSSProperties,
  DragEvent,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
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

type DragCallback = (e: DragEvent<HTMLDivElement>, pos: number) => void;
interface IDatagridContextMethods {
  handleColumnSort: (field: string, direction: SortDirectionType) => void;
  handleHeaderColumnGrab: DragCallback;
  handleHeaderColumnDrop: DragCallback;
}
interface IDatagridContext extends IDatagridContextMethods {
  columns: ColumnType[];
  rows: RowType[];
  height: number;
  width: CSSProperties['width'];
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
  handleColumnSort: voidFn,
  handleHeaderColumnGrab: voidFn,
  handleHeaderColumnDrop: voidFn,
};

const DatagridContext = createContext<IDatagridContext>(initialState);

const createColumnMap = (columns: ColumnType[]) => {
  return columns.reduce((obj, c, i) => ({ ...obj, [i]: c }), {});
};

export const DatagridProvider = ({
  children,
  rows = [],
  columns,
  width = initialState.width,
  height = initialState.height,
  pagination,
  ...props
}: IDatagridProviderProps) => {
  const [gridRows, setGridRows] = useState<RowType[]>();
  const [sortedBy, setSortedBy] = useState<string>();
  /**
   * The column object with index as keys
   * Example {0: {field: 'id', name: 'id', width: 100}}
   * This helps in sorting each row property according to the columns
   * and extracts the width of each cell.
   * ======
   * This object helps in sorting each row property
   * according to the columns. Works as a faster way to access each cell property
   * since we don't have to loop over the columns again.
   * Render the rows based on this object
   */
  const [columnObject, setColumnObject] = useState<ColumnObjectType>();
  const [sorter, setSorter] = useState<Worker>();

  const [originalRows, setOriginalRows] = useState<RowType[]>();

  const columnsToRender = useMemo(
    () => (columnObject ? Object.values(columnObject) : []),
    [columnObject]
  );

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

  useEffect(() => setOriginalRows(rows), [rows]);

  useEffect(() => {
    const newColumnMap = createColumnMap(columns);
    setColumnObject(newColumnMap);
  }, [columns]);

  useEffect(() => {
    if (pagination) {
      const { page, pageSize, total } = pagination;
      const startIndex = page * pageSize;
      let endIndex = (page + 1) * pageSize;
      endIndex = total < endIndex ? total : endIndex;
      setGridRows(originalRows?.slice(startIndex, endIndex));
    } else {
      setGridRows(originalRows);
    }
  }, [originalRows, pagination]);

  return (
    <DatagridContext.Provider
      value={{
        rows: gridRows || rows,
        columns: columnsToRender,
        width,
        height,
        sortedBy,
        handleColumnSort,
        handleHeaderColumnGrab,
        handleHeaderColumnDrop,
        options: columnObject,
        pagination,
        ...props,
      }}
    >
      {children}
    </DatagridContext.Provider>
  );
};

export const useDatagrid = () => useContext(DatagridContext);
export default DatagridProvider;
