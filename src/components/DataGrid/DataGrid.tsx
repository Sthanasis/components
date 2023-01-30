import DatagridProvider, { useDatagrid } from 'src/context/datagrid';
import DataColumns from './DataColumns/DataColumns';
import DataRow from './DataRow/DataRow';

import { Table } from './StyledDataGrid';
import { IDataGridProps } from './utilities/types';
import VirtualTable from './VirtualTable';

const DataRows = () => {
  const { rows } = useDatagrid();
  return (
    <>
      {rows.map((row, index) => (
        <DataRow key={row.id} row={row} noBorder={index + 1 === rows.length} />
      ))}
    </>
  );
};

const Grid = (): JSX.Element => {
  const { rows, columns, height, width } = useDatagrid();
  const content = rows.length <= 100 ? <DataRows /> : <VirtualTable />;
  return (
    <Table height={height} width={width}>
      <DataColumns columns={columns} />
      {content}
    </Table>
  );
};

const DataGrid = ({ ...rest }: IDataGridProps) => (
  <DatagridProvider {...rest}>
    <Grid />
  </DatagridProvider>
);

export default DataGrid;
