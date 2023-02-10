import { IStyledHeaderCellProps } from 'src/types';
import { CSSProperties } from 'react';
import styled from 'styled-components';

interface IHeaderActionsContainerProps {
  opacity: CSSProperties['opacity'];
}

export const StyledHeaderCell = styled.div`
  ${({
    withBorder,
    width = 100,
    height,
    theme,
    grabed,
  }: IStyledHeaderCellProps) => ({
    minWidth: `${width}px`,
    maxWidth: `${width}px`,
    width: `${width}px`,
    height: height ?? 'auto',
    borderRight: withBorder
      ? `2px solid ${theme.basicPalette.lightgray}`
      : undefined,
    textAlign: 'left',
    padding: '15px 5px',
    textTransform: 'capitalize',
    backgroundColor: grabed ? 'rgba(255,255,255,.9)' : undefined,
  })}
`;

export const HeaderCellContainer = styled.div`
  ${() => ({
    display: 'flex',
    height: '25px',
    alignItems: 'center',
  })}
`;

export const HeaderActionsContainer = styled.div`
  ${({ opacity }: IHeaderActionsContainerProps) => ({
    opacity,
    transition: '.2s',
    marginLeft: '3px',
  })}
`;
