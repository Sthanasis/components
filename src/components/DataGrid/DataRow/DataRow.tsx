import { StyledDataRow } from './StyledDataRow';
import DataCell from '../DataCell';
import { RowType } from '../types';

interface IDataRowProps {
  row: RowType;
}

const DataRow = ({ row }: IDataRowProps) => {
  return (
    <StyledDataRow>
      {Object.keys(row).map((key) => (
        <DataCell key={`${key}-row`} field={key} value={row[key]} />
      ))}
    </StyledDataRow>
  );
};

export default DataRow;
