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
} from 'src/components/DataGrid/types';

export interface IDatagridContext {
  columns: ColumnType[];
  rows: RowType[];
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
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
  rows,
  columns,
  width,
  height,
}: IDatagridProviderProps) => {
  const [gridRows, setGridRows] = useState<RowType[]>(rows);
  const [sortedBy, setSortedBy] = useState<string>();
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
  const sorter: Worker = useMemo(
    () => new Worker(new URL('./sortWorker.ts', import.meta.url)),
    []
  );

  useEffect(() => {
    if (sorter)
      sorter.onmessage = function (e: MessageEvent<RowType[]>) {
        setGridRows(e.data);
      };
    return () => {
      sorter.onmessage = null;
    };
  }, [sorter]);

  const handleColumnSort = (field: string, direction: SortDirectionType) => {
    if (direction === 'default') {
      setSortedBy(undefined);
    }
    if (window.Worker) {
      sorter.postMessage([rows, direction, field]);
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
