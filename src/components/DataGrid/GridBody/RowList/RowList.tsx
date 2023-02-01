import { memo } from 'react';
import { useDatagrid } from 'src/context/datagrid';
import DataRow from '../DataRow/DataRow';

const RowList = (): JSX.Element => {
  const { rows } = useDatagrid();
  return (
    <>
      {rows.map((row, index) => (
        <DataRow key={row.id} row={row} noBorder={index + 1 === rows.length} />
      ))}
    </>
  );
};

export default memo(RowList);
