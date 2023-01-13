import Text from 'src/components/Text';
import { IBaseProps } from 'src/types/props';
import { StyledDataCell } from './StyledDataCell';

interface IDataCellProps extends IBaseProps {
  value: string | number | undefined | null;
  field: string;
  withBorder?: boolean;
  width?: number | string;
  height?: number | string;
}

const DataCell = ({
  value,
  field,
  withBorder = false,
  width = 100,
  height = 50,
  ...rest
}: IDataCellProps) => {
  const content = value ?? '';

  return (
    <StyledDataCell
      data-field={field}
      withBorder={withBorder}
      width={width}
      height={height}
      {...rest}
    >
      <Text>{content}</Text>
    </StyledDataCell>
  );
};

export default DataCell;
