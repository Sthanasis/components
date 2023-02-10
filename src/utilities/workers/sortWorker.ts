import type {
  SortDirectionType,
  ISortMessageEventData,
  RowType,
  ColumnObjectType,
} from 'src/types';

const compare = (a: string | number, b: string | number) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
};

const orderBy = (
  dir: SortDirectionType,
  a: string | number,
  b: string | number
) => {
  if (dir === 'asc') {
    return compare(a, b);
  }
  if (dir === 'desc') {
    return compare(b, a);
  }
  return 0;
};

const mapRowsByColumn = (rows: RowType[], columns: ColumnObjectType) => {
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

self.onmessage = (e: MessageEvent<ISortMessageEventData>) => {
  const { rows, direction, field, columnObject } = e.data;
  if (direction === 'default' && columnObject) {
    const originalRows = mapRowsByColumn(rows, columnObject);
    postMessage(originalRows);
  } else {
    const sortedRows = rows.sort((currentRow, nextRow) => {
      if (currentRow[field] && nextRow[field]) {
        const currentField = currentRow[field];
        const nextField = nextRow[field];
        if (typeof currentField === 'string' && typeof nextField === 'string') {
          return orderBy(
            direction,
            currentField.toLowerCase(),
            nextField.toLowerCase()
          );
        }
        if (typeof currentField === 'number' && typeof nextField === 'number') {
          return orderBy(direction, currentField, nextField);
        }
      }
      return 0;
    });
    postMessage(sortedRows);
  }
};
