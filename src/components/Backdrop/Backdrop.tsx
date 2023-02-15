import { KeyboardEvent } from 'react';
import { IBackdropProps } from 'src/types';
import { StyledBackdrop } from './StyledBackdrop';

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
