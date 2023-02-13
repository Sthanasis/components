import { Density } from 'src/types';
import styled from 'styled-components';

export const StyledDataRow = styled.div`
  ${({ height }: { height: Density }) => ({
    height: height,
    display: 'flex',
    alignItems: 'center',
  })}
`;
