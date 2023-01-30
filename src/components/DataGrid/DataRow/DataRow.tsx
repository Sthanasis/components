import { StyledDataRow } from './StyledDataRow';
import DataCell from '../DataCell';
import { RowType } from '../utilities/types';
import { IBaseProps } from 'src/types/props';
import { useDatagrid } from 'src/context/datagrid';

interface IDataRowProps extends IBaseProps {
  row: RowType;
  noBorder: boolean;
}

const DataRow = ({ row, noBorder, ...props }: IDataRowProps) => {
  const { properties } = useDatagrid();
  return (
    <StyledDataRow {...props} noBorder={noBorder}>
      {Object.keys(row).map((key, i) => (
        <DataCell
          key={key}
          field={key}
          value={row[key]}
          width={properties && properties[i].width}
        />
      ))}
    </StyledDataRow>
  );
};

export default DataRow;
