import { StyledDataRow } from './StyledDataRow';
import DataCell from '../../DataCell';
import { RowType, IBaseProps } from 'src/types';
import { useDatagrid } from 'src/context/datagrid';

interface IDataRowProps extends IBaseProps {
  row: RowType;
  noBorder: boolean;
}

const DataRow = ({ row, noBorder, ...props }: IDataRowProps) => {
  const { options } = useDatagrid();
  return (
    <StyledDataRow {...props}>
      {Object.keys(row).map((key, i) => (
        <DataCell
          key={key}
          field={key}
          value={row[key]}
          width={options && options[i].width}
          withBorder={!noBorder}
        />
      ))}
    </StyledDataRow>
  );
};

export default DataRow;
