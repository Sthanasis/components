import {
  createContext,
  CSSProperties,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  ColumnType,
  IDataGridProps,
  RowType,
  SortDirectionType,
} from 'src/components/DataGrid/utilities/types';

interface IDatagridContext {
  columns: ColumnType[];
  rows: RowType[];
  height: number;
  width: CSSProperties['width'];
  handleColumnSort?: (field: string, direction: SortDirectionType) => void;
  sortedBy?: string;
}
interface IDatagridProviderProps extends IDataGridProps {
  children: ReactNode;
}

const initialState: IDatagridContext = {
  rows: [],
  columns: [],
  height: 500,
  width: 'max-content',
};

const DatagridContext = createContext<IDatagridContext>(initialState);

export const DatagridProvider = ({
  children,
  rows = [],
  columns = [],
  width = initialState.width,
  height = initialState.height,
}: IDatagridProviderProps) => {
  const [gridRows, setGridRows] = useState<RowType[]>(rows);
  const [sortedBy, setSortedBy] = useState<string>();
  const [sorter, setSorter] = useState<Worker>();

  const columnObject: { [key: number]: ColumnType } = useMemo(() => {
    return columns.reduce((obj, c, i) => ({ ...obj, [i]: c }), {});
  }, [columns]);
  useEffect(() => {
    setSorter(
      new Worker(new URL('../utilities/workers/sortWorker.ts', import.meta.url))
    );
  }, []);

  useEffect(() => {
    // order each row property by column field
    const mappedRows = rows.map((r) =>
      Object.values(r).reduce(
        (obj, v, i) => ({
          ...obj,
          [columnObject[i].field]: v,
        }),
        {}
      )
    );
    setGridRows(mappedRows);
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

  const handleColumnSort = (field: string, direction: SortDirectionType) => {
    if (direction === 'default') {
      setSortedBy(undefined);
    }
    if (window.Worker) {
      if (sorter) sorter.postMessage([rows, direction, field]);
    }
    setSortedBy(field);
  };

  return (
    <DatagridContext.Provider
      value={{
        rows: gridRows,
        columns,
        width,
        height,
        sortedBy,
        handleColumnSort,
      }}
    >
      {children}
    </DatagridContext.Provider>
  );
};

export const useDatagrid = () => useContext(DatagridContext);
export default DatagridProvider;
