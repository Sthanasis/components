import styled from 'styled-components';

interface IStyledBackdrop {
  opacity: string | number;
}

export const StyledBackdrop = styled.div`
  ${({ opacity }: IStyledBackdrop) => ({
    backgroundColor: `rgba(0,0,0,${opacity})`,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 10,
  })}
`;
