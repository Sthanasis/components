import { IBaseProps } from '../../../types/props';
import './text.scss';

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
  const classList = ['text'];
  if (variant === 'span') {
    classList.push('base-text');
  } else if (variant === 'p') {
    classList.push('small-text');
  } else {
    classList.push('header-text');
  }

  if (className) {
    className
      .trim()
      .split(' ')
      .forEach((c) => classList.push(c));
  }

  return (
    <Component className={classList.join(' ')} style={style}>
      {children}
    </Component>
  );
};

export default Text;
