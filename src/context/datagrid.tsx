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

import type {
  ColumnType,
  IDataGridProps,
  RowType,
  SortDirectionType,
} from 'src/components/DataGrid/utilities/types';

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
  properties?: { [key: number]: ColumnType };
  loading?: boolean;
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
  columns = [],
  width = initialState.width,
  height = initialState.height,
  ...rest
}: IDatagridProviderProps) => {
  const [gridRows, setGridRows] = useState<RowType[]>(rows);
  const [sortedBy, setSortedBy] = useState<string>();
  const [columnObject, setColumnObject] =
    useState<{ [key: number]: ColumnType }>();
  const [sorter, setSorter] = useState<Worker>();

  const columnsToRender = useMemo(
    () => (columnObject ? Object.values(columnObject) : []),
    [columnObject]
  );

  const handleColumnSort = (field: string, direction: SortDirectionType) => {
    if (direction === 'default') {
      setSortedBy(undefined);
    }
    if (window.Worker) {
      if (sorter) sorter.postMessage([rows, direction, field]);
    }
    setSortedBy(field);
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
    /**
     * The column object with index as keys
     * Example {0: {field: 'id', name: 'id', width: 100}}
     * This helps to sort each row property according to the columns
     * and to extract the width of each cell.
     */
    const newColumnMap = createColumnMap(columns);
    setColumnObject(newColumnMap);
  }, [columns]);

  useEffect(() => {
    /**
     * Map the rows based on the columnObject Map.
     * this will trigger each time a header is changing
     * so each row will update the properties accordingly
     */
    if (columnObject) {
      const mappedRows = rows.map((r) =>
        Object.values(r).reduce(
          (obj, _v, i) => ({
            ...obj,
            [columnObject[i].field]: r[columnObject[i].field],
          }),
          {}
        )
      );
      setGridRows(mappedRows);
    }
  }, [columnObject]);

  useEffect(() => {
    if (sorter)
      sorter.onmessage = function (e: MessageEvent<RowType[]>) {
        setGridRows(e.data);
      };

    return () => {
      if (sorter) sorter.terminate();
    };
  }, [sorter]);

  return (
    <DatagridContext.Provider
      value={{
        rows: gridRows,
        columns: columnsToRender ?? [],
        width,
        height,
        sortedBy,
        handleColumnSort,
        handleHeaderColumnGrab,
        handleHeaderColumnDrop,
        properties: columnObject,
        ...rest,
      }}
    >
      {children}
    </DatagridContext.Provider>
  );
};

export const useDatagrid = () => useContext(DatagridContext);
export default DatagridProvider;
