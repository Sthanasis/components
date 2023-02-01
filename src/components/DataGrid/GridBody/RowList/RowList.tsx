import { memo, useMemo } from 'react';
import { useDatagrid } from 'src/context/datagrid';
import { RENDER_AHEAD, ROW_HEIGHT } from '../../utilities/constants';
import DataRow from '../DataRow/DataRow';

interface IRowListProps {
  start?: number;
}

const RowList = ({ start }: IRowListProps): JSX.Element => {
  const { rows, height } = useDatagrid();
  const totalRows = rows.length;
  const visibleNodeCount = useMemo(
    () =>
      start &&
      Math.min(
        rows.length - start,
        Math.ceil(height / ROW_HEIGHT) + RENDER_AHEAD
      ),
    [start, rows]
  );
  if (start) {
    console.log('rerender');
    return (
      <>
        {new Array(visibleNodeCount).fill(null).map((_, index) => (
          <DataRow
            key={rows[start + index].id}
            row={rows[start + index]}
            noBorder={start + index + 1 === totalRows}
          />
        ))}
      </>
    );
  }
  return (
    <>
      {rows.map((row, index) => (
        <DataRow key={row.id} row={row} noBorder={index + 1 === totalRows} />
      ))}
    </>
  );
};

export default memo(RowList);
