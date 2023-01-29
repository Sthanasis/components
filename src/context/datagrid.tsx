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
  RowType,
  SortDirectionType,
} from 'src/components/DataGrid/utilities/types';

export interface IDatagridContext {
  columns: ColumnType[];
  rows: RowType[];
  width?: CSSProperties['width'];
  height?: number;
  handleColumnSort?: (field: string, direction: SortDirectionType) => void;
  sortedBy?: string;
}

const initialState: IDatagridContext = {
  rows: [],
  columns: [],
};

const DatagridContext = createContext<IDatagridContext>(initialState);

interface IDatagridProviderProps extends IDatagridContext {
  children: ReactNode;
}

export const DatagridProvider = ({
  children,
  rows = [],
  columns = [],
  width,
  height,
}: IDatagridProviderProps) => {
  const [gridRows, setGridRows] = useState<RowType[]>(rows);
  const [sortedBy, setSortedBy] = useState<string>();
  const [sorter, setSorter] = useState<Worker>();

  const columnObject: { [key: number]: ColumnType } = useMemo(() => {
    return columns.reduce((obj, c, i) => ({ ...obj, [i]: c }), {});
  }, [columns]);
  // the rows to render
  const mappedRows: RowType[] = useMemo(() => {
    return gridRows.map((r) =>
      Object.values(r).reduce(
        (obj, v, i) => ({ ...obj, [columnObject[i].field]: v }),
        {}
      )
    );
  }, [gridRows, columnObject]);
  useEffect(() => {
    setSorter(
      new Worker(new URL('../utilities/workers/sortWorker.ts', import.meta.url))
    );
  }, []);

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
        rows: mappedRows,
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
