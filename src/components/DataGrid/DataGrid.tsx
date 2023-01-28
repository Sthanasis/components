import DatagridProvider, {
  IDatagridContext,
  useDatagrid,
} from 'src/context/datagrid';
import DataColumns from './DataColumns/DataColumns';
import DataRow from './DataRow/DataRow';
import { Table, TableContainer, Tbody, Thead } from './StyledDataGrid';

const Grid = (): JSX.Element => {
  const { columns, rows, height, width } = useDatagrid();

  return (
    <TableContainer height={height} width={width}>
      <Table>
        <Thead>
          <DataColumns columns={columns} />
        </Thead>
        <Tbody>
          {rows.map((row) => (
            <DataRow key={row.id} row={row} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

const DataGrid = ({ rows, columns, width, height }: IDatagridContext) => {
  return (
    <DatagridProvider
      rows={rows}
      columns={columns}
      width={width}
      height={height}
    >
      <Grid />
    </DatagridProvider>
  );
};

export default DataGrid;
