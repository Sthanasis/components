import { useEffect, useMemo, useState } from 'react';
import { createColumnMap } from 'src/components/DataGrid/utilities/methods';
import {
  ColumnObjectType,
  ColumnType,
  IPaginationOptions,
  RowType,
} from 'src/types';

export const useRows = (rows: RowType[], pagination?: IPaginationOptions) => {
  const [gridRows, setGridRows] = useState<RowType[]>();
  // keep track of rows if pagination is used.
  const [originalRows, setOriginalRows] = useState<RowType[]>();
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

  useEffect(() => setOriginalRows(rows), [rows]);

  return { gridRows, originalRows, setGridRows, setOriginalRows };
};

export const useColumns = (columns: ColumnType[]) => {
  const [columnObject, setColumnObject] = useState<ColumnObjectType>();
  const columnsToRender = useMemo(
    () => (columnObject ? Object.values(columnObject) : []),
    [columnObject]
  );
  useEffect(() => {
    const newColumnMap = createColumnMap(columns);
    setColumnObject(newColumnMap);
  }, [columns]);

  return { columnObject, columnsToRender, setColumnObject };
};
