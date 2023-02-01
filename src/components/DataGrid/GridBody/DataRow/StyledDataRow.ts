import styled from 'styled-components';
import { ROW_HEIGHT } from '../../utilities/constants';

export const StyledDataRow = styled.div`
  ${() => ({
    height: ROW_HEIGHT,
    display: 'flex',
    alignItems: 'center',
  })}
`;
