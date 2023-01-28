import styled from 'styled-components';
import { ROW_HEIGHT } from '../utilities/constants';

export const StyledDataRow = styled.tr`
  ${() => ({
    height: ROW_HEIGHT,
  })}
`;
