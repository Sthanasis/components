import { StyledDataRow } from './StyledDataRow';
import DataCell from '../../DataCell';
import { RowType, IBaseProps } from 'src/types';
import { useDatagrid } from 'src/context/datagrid';
import { memo } from 'react';

interface IDataRowProps extends IBaseProps {
  row: RowType;
  noBorder: boolean;
}

const DataRow = ({ row, noBorder, ...props }: IDataRowProps) => {
  const { options, density, densityOptions } = useDatagrid();
  const height = densityOptions[density];
  return (
    <StyledDataRow height={height} {...props}>
      {options &&
        Object.keys(row).map((_, i) => {
          const { field, width } = options[i];
          return (
            <DataCell
              key={field}
              field={field}
              value={row[field]}
              width={width}
              withBorder={!noBorder}
            />
          );
        })}
    </StyledDataRow>
  );
};

export default memo(DataRow);
