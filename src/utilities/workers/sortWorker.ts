import type {
  SortDirectionType,
  ISortMessageEventData,
  RowType,
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

self.onmessage = (e: MessageEvent<ISortMessageEventData>) => {
  const { rows, direction, field, pagination } = e.data;
  let sortedRows: RowType[] = [];
  let dataRows: RowType[] = [];
  if (direction === 'default') {
    sortedRows = rows;
  } else {
    sortedRows = rows.sort((currentRow, nextRow) => {
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
  }

  if (pagination) {
    const { page, pageSize, total } = pagination;
    const startIndicator = pageSize * page;
    let endIndicator = pageSize * (page + 1);
    endIndicator = total < endIndicator ? total : endIndicator;
    dataRows = sortedRows.slice(startIndicator, endIndicator);
  }
  postMessage({ data: dataRows, original: sortedRows });
};
