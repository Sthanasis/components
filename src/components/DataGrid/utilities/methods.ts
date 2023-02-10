import type { ColumnObjectType, RowType } from 'src/types/datagrid';

export const mapRowsByColumn = (rows: RowType[], columns: ColumnObjectType) => {
  return rows.map((r) =>
    Object.values(r).reduce(
      (obj, _v, i) => ({
        ...obj,
        [columns[i].field]: r[columns[i].field],
      }),
      {}
    )
  );
};

export type MapRowsMethod = typeof mapRowsByColumn;
