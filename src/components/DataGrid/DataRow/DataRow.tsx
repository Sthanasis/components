import { StyledDataRow } from './StyledDataRow';
import DataCell from '../DataCell';

export type RowType = {
  id: string | number;
  [key: string]: string | number | undefined | null;
};

interface IDataRowProps {
  row: RowType;
}

const DataRow = ({ row }: IDataRowProps) => {
  return (
    <StyledDataRow>
      {Object.keys(row).map((key) => (
        <DataCell
          tag="td"
          key={`${row.id}${key}`}
          field={key}
          value={row[key]}
        />
      ))}
    </StyledDataRow>
  );
};

export default DataRow;
