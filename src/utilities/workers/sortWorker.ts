import { SortDirectionType } from 'src/components/DataGrid/utilities/types';
import { IMessageEventData } from 'src/types/types';

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

self.onmessage = (e: MessageEvent<IMessageEventData>) => {
  const { rows, direction, field } = e.data;
  if (direction === 'default') {
    postMessage(rows);
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
