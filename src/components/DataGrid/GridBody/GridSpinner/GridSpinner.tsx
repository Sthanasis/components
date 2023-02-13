import Progress from 'src/components/Progress';
import { StyledSpinnerContainer } from './StyledSpinnerContainer';

const GridSpinner = (): JSX.Element => (
  <StyledSpinnerContainer>
    <Progress type="spinner" />
  </StyledSpinnerContainer>
);

export default GridSpinner;
