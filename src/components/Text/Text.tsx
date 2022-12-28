import { IBaseProps } from '../../types/props';

interface ITextProps extends IBaseProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

const Text = ({
  children,
  variant = 'span',
  className,
  style,
}: ITextProps): JSX.Element => {
  const Component = variant;

  return (
    <Component className={className} style={style}>
      {children}
    </Component>
  );
};

export default Text;
