import DatagridProvider, { useDatagrid } from 'src/context/datagrid';
import { Table } from './DataGrid.styled';
import { IBaseProps, IDataGridProps } from 'src/types';
import VirtualTable from './VirtualTable';
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
  density,
  densityOptions,
  ...rest
}: IDataGridProps) => (
  <DatagridProvider
    columns={columns}
    rows={rows}
    height={height}
    loading={loading}
    pagination={pagination}
    width={width}
    density={density}
    densityOptions={densityOptions}
  >
    <TableGrid {...rest} />
  </DatagridProvider>
);

export default DataGrid;
