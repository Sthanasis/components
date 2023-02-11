import DatagridProvider, { useDatagrid } from 'src/context/datagrid';
import { Table } from './StyledDataGrid';
import { IDataGridProps } from 'src/types';
import VirtualTable from './GridBody/VirtualTable';
import RegularTable from './RegularTable';
import Pagination from './Pagination';

const Grid = ({ virtual }: { virtual?: boolean }): JSX.Element => {
  const { height, width, pagination } = useDatagrid();
  const content = virtual ? <VirtualTable /> : <RegularTable />;

  return (
    <Table height={height} width={width}>
      {content}
      {pagination && <Pagination />}
    </Table>
  );
};

const DataGrid = ({ virtual, ...rest }: IDataGridProps) => (
  <DatagridProvider {...rest}>
    <Grid virtual={virtual} />
  </DatagridProvider>
);

export default DataGrid;
