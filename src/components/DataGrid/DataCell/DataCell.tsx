import Text from 'src/components/Text';
import { ICellProps } from 'src/types';
import { StyledDataCell } from './StyledDataCell';

const DataCell = ({
  value,
  field,
  withBorder,
  width,
  height,
  ...rest
}: ICellProps) => {
  const content = value ?? '';

  return (
    <StyledDataCell
      data-field={field}
      withBorder={!!withBorder}
      width={width}
      height={height}
      {...rest}
    >
      <Text>{content}</Text>
    </StyledDataCell>
  );
};

export default DataCell;
