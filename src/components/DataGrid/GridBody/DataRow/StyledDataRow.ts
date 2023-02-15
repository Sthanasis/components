import styled from 'styled-components';

export const StyledDataRow = styled.div`
  ${({ height }: { height: number }) => ({
    height: height,
    display: 'flex',
    alignItems: 'center',
  })}
`;
