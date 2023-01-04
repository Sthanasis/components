import { MouseEvent, ReactNode } from 'react';
import { IBaseProps } from 'src/types/props';
import { StyledBackdrop } from './StyledBackdrop';

interface IBackdropProps extends IBaseProps {
  opacity?: string | number;
  children: ReactNode;
  onClick: (e: MouseEvent<HTMLDivElement>) => void | Promise<void>;
}

const Backdrop = ({
  opacity = 0,
  children,
  onClick,
}: IBackdropProps): JSX.Element => {
  return (
    <StyledBackdrop
      opacity={opacity}
      onClick={onClick}
      onKeyDown={(e) => console.log(e)}
    >
      {children}
    </StyledBackdrop>
  );
};

export default Backdrop;
