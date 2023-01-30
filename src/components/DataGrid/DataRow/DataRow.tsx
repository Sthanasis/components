import { StyledDataRow } from './StyledDataRow';
import DataCell from '../DataCell';
import { RowType } from '../utilities/types';
import { IBaseProps } from 'src/types/props';

interface IDataRowProps extends IBaseProps {
  row: RowType;
  noBorder: boolean;
}

const DataRow = ({ row, noBorder, ...props }: IDataRowProps) => {
  return (
    <StyledDataRow {...props} noBorder={noBorder}>
      {Object.keys(row)
        .filter((k) => k !== 'width')
        .map((key) => (
          <DataCell
            key={key}
            field={key}
            value={row[key]}
            width={row?.width ?? undefined}
          />
        ))}
    </StyledDataRow>
  );
};

export default DataRow;
