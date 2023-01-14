import DataColumns, { ColumnType } from './DataColumns/DataColumns';
import DataRow, { RowType } from './DataRow/DataRow';
import { Table, TableContainer, Tbody, Thead } from './StyledDataGrid';

interface IDataGridProps {
  columns: ColumnType[];
  rows: RowType[];
}

const DataGrid = ({ columns, rows }: IDataGridProps): JSX.Element => {
  return (
    <TableContainer>
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

export default DataGrid;
