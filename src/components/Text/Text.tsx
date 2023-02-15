import { ITextProps } from 'src/types';
import { getStyledText } from './StyledText';

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
