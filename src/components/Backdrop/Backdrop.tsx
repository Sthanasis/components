import { ReactNode, KeyboardEvent } from 'react';
import { IBaseProps } from 'src/types/props';
import { StyledBackdrop } from './StyledBackdrop';

interface IBackdropProps extends IBaseProps {
  opacity?: string | number;
  children?: ReactNode;
  onClose: () => void | Promise<void>;
}

const Backdrop = ({
  opacity = 0,
  children,
  onClose,
  ...rest
}: IBackdropProps): JSX.Element => {
  const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === '27') {
      onClose();
    }
  };

  return (
    <StyledBackdrop
      {...rest}
      opacity={opacity}
      onMouseUp={onClose}
      onKeyUp={handleKeyPress}
    >
      {children}
    </StyledBackdrop>
  );
};

export default Backdrop;
