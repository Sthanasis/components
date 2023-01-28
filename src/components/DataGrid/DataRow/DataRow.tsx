import { StyledDataRow } from './StyledDataRow';
import DataCell from '../DataCell';
import { RowType } from '../utilities/types';
import { IBaseProps } from 'src/types/props';

interface IDataRowProps extends IBaseProps {
  row: RowType;
}

const DataRow = ({ row, ...props }: IDataRowProps) => {
  return (
    <StyledDataRow {...props}>
      {Object.keys(row).map((key) => (
        <DataCell key={`${key}-row`} field={key} value={row[key]} />
      ))}
    </StyledDataRow>
  );
};

export default DataRow;
