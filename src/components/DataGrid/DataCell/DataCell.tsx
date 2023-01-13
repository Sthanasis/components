import Text from 'src/components/Text';
import { IBaseProps } from 'src/types/props';
import { TH, TD } from './StyledDataCell';

interface IDataCellProps extends IBaseProps {
  value: string | number | undefined | null;
  field: string;
  withBorder?: boolean;
  width?: number | string;
  height?: number | string;
  tag: 'td' | 'th';
}

const DataCell = ({
  value,
  field,
  withBorder = false,
  width,
  height,
  tag,
  ...rest
}: IDataCellProps) => {
  const content = value ?? '';
  const Cmp = tag === 'td' ? TD : TH;
  return (
    <Cmp
      data-field={field}
      withBorder={withBorder}
      width={width}
      height={height}
      {...rest}
    >
      <Text>{content}</Text>
    </Cmp>
  );
};

export default DataCell;
