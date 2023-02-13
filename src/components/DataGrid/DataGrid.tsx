import DatagridProvider, { useDatagrid } from 'src/context/datagrid';
import { Table } from './StyledDataGrid';
import { IBaseProps, IDataGridProps } from 'src/types';
import VirtualTable from './GridBody/VirtualTable';
import RegularTable from './RegularTable';
import Pagination from './Pagination';

interface ITableGridProps extends IBaseProps {
  virtual?: boolean;
}

const TableGrid = ({ virtual, ...props }: ITableGridProps): JSX.Element => {
  const { height, width, pagination } = useDatagrid();
  const content = virtual ? <VirtualTable /> : <RegularTable />;

  return (
    <Table height={height} width={width} {...props}>
      {content}
      {pagination && <Pagination />}
    </Table>
  );
};

const DataGrid = ({
  columns,
  rows,
  height,
  loading,
  pagination,
  width,
  ...rest
}: IDataGridProps) => (
  <DatagridProvider
    columns={columns}
    rows={rows}
    height={height}
    loading={loading}
    pagination={pagination}
    width={width}
  >
    <TableGrid {...rest} />
  </DatagridProvider>
);

export default DataGrid;
