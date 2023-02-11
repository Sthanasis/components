import { ReactNode } from 'react';
import { IBaseProps } from 'src/types';
import { StyledBox } from './Box.styled';

interface IBoxProps extends IBaseProps {
  children: ReactNode;
}

const Box = ({ children, ...props }: IBoxProps): JSX.Element => {
  return <StyledBox {...props}>{children}</StyledBox>;
};

export default Box;
