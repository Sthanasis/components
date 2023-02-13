import type { ColumnType } from 'src/types/datagrid';

export const createColumnMap = (columns: ColumnType[]) => {
  return columns.reduce((obj, c, i) => ({ ...obj, [i]: c }), {});
};
