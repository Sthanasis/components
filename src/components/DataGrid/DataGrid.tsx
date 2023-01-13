import DataColumns, { ColumnType } from './DataColumns/DataColumns';
import DataRow, { RowType } from './DataRow/DataRow';
import { StyledDataGrid } from './StyledDataGrid';

interface IDataGridProps {
  columns: ColumnType[];
  rows: RowType[];
}

const DataGrid = ({ columns, rows }: IDataGridProps): JSX.Element => {
  return (
    <StyledDataGrid>
      <DataColumns columns={columns} />
      {rows.map((row) => (
        <DataRow key={row.id} row={row} />
      ))}
    </StyledDataGrid>
  );
};

export default DataGrid;
