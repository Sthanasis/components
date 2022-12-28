import { IBaseProps } from '../../types/props';
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

interface ITextProps extends IBaseProps {
  children: React.ReactNode;
  tag?: TextTagType;
}

const Text = ({
  children,
  tag = 'span',
  className,
  style,
}: ITextProps): JSX.Element => {
  const Component = getStyledText(tag);
  return (
    <Component className={className} style={style}>
      {children}
    </Component>
  );
};

export default Text;
