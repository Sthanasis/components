import Text from 'src/components/Text';
import { ICellProps } from '../types';
import { TD } from './StyledDataCell';

const DataCell = ({
  value,
  field,
  withBorder = false,
  width,
  height,
  ...rest
}: ICellProps) => {
  const content = value ?? '';
  return (
    <TD
      data-field={field}
      withBorder={withBorder}
      width={width}
      height={height}
      {...rest}
    >
      <Text>{content}</Text>
    </TD>
  );
};

export default DataCell;
