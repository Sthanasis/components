import { IBaseProps } from 'src/types';
import { getStyledText } from './StyledText';

export type TextTagType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span';

export type TextVariantType = 'primary' | 'secondary' | 'default';
export interface ITextProps extends IBaseProps {
  children: React.ReactNode;
  tag?: TextTagType;
  variant?: TextVariantType;
}

const Text = ({
  children,
  tag = 'span',
  className,
  variant = 'default',
  style,
}: ITextProps): JSX.Element => {
  const Component = getStyledText(tag);
  return (
    <Component variant={variant} className={className} style={style}>
      {children}
    </Component>
  );
};

export default Text;
