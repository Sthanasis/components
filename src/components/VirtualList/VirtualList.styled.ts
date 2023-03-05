import styled from 'styled-components';

export const VirtaulListContainer = styled.div`
  ${({ height }: { height?: number }) => ({
    overflow: 'auto',
    height: height || '100%',
    width: 'auto',
  })}
`;

export const VirtualListBody = styled.div`
  ${() => ({
    position: 'relative',
  })}
`;
