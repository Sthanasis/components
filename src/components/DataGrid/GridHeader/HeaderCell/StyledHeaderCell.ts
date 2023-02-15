import { CSSProperties } from 'react';
import styled from 'styled-components';

interface IHeaderActionsContainerProps {
  opacity: CSSProperties['opacity'];
}
export const StyledHeaderCellContainer = styled.div`
  ${({
    width = 100,
    grabed,
  }: {
    width?: number | string;
    height: CSSProperties['height'];
    grabed: boolean;
  }) => {
    let w = width;
    if (typeof w === 'number') {
      w = `${width}px`;
    }
    return {
      minWidth: w,
      maxWidth: w,
      width: w,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0px 5px',
      textAlign: 'end',
      backgroundColor: grabed ? 'rgba(0,0,0,.1)' : undefined,
    };
  }}
`;

export const StyledHeaderCell = styled.div`
  ${() => ({
    height: '50px',
    width: '100%',
    textAlign: 'left',
    flex: '0.9',
    display: 'flex',
    overflow: 'hidden',
    padding: '0px 5px',
    alignItems: 'center',
    textTransform: 'capitalize',
  })}
`;

export const HeaderActionsContainer = styled.div`
  ${({ opacity }: IHeaderActionsContainerProps) => ({
    opacity,
    transition: '.2s',
    marginLeft: '3px',
  })}
`;
export const StyledCellBorder = styled.div`
  content: '|';
  cursor: default;
`;
