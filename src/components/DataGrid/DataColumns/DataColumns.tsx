import DataCell from '../DataCell';
import { StyledDataColumns } from './StyledDataColumns';

export type ColumnType = {
  field: string;
  name: string;
};

interface IDataColumnsProps {
  columns: ColumnType[];
}

const DataColumns = ({ columns }: IDataColumnsProps): JSX.Element => {
  return (
    <StyledDataColumns>
      {columns.map((c) => (
        <DataCell
          tag="th"
          key={c.field}
          field={c.field}
          value={c.name}
          height="auto"
        />
      ))}
    </StyledDataColumns>
  );
};

export default DataColumns;
