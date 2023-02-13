import { CSSProperties } from 'react';
import styled from 'styled-components';

export const StyledBox = styled.div`
  display: flex;
  ${({ style }: { style: CSSProperties }) => ({ ...style })};
`;
