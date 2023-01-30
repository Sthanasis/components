import DatagridProvider, { useDatagrid } from 'src/context/datagrid';
import DataColumns from './GridHeader/GridHeader';
import DataRow from './DataRow/DataRow';

import { Content, Table } from './StyledDataGrid';
import { IDataGridProps } from './utilities/types';
import VirtualTable from './VirtualTable';

const DataRows = () => {
  const { rows } = useDatagrid();
  return (
    <Content>
      {rows.map((row, index) => (
        <DataRow key={row.id} row={row} noBorder={index + 1 === rows.length} />
      ))}
    </Content>
  );
};

const Grid = ({ bigDataset }: { bigDataset?: boolean }): JSX.Element => {
  const { columns, height, width } = useDatagrid();
  const content = bigDataset ? <VirtualTable /> : <DataRows />;
  return (
    <Table height={height} width={width}>
      <DataColumns columns={columns} />
      {content}
    </Table>
  );
};

const DataGrid = ({ bigDataset, ...rest }: IDataGridProps) => (
  <DatagridProvider {...rest}>
    <Grid bigDataset={bigDataset} />
  </DatagridProvider>
);

export default DataGrid;
