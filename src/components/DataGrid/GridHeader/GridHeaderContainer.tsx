import GridHeader from './GridHeader';
import { StyledContainer } from './StyledGridHeader';

const GridHeaderContainer = ({ scrollLeft }: { scrollLeft: number }) => (
  <StyledContainer>
    <div
      style={{
        transform: `translate3d(-${scrollLeft}px,0px,0px)`,
      }}
    >
      <GridHeader />
    </div>
  </StyledContainer>
);

export default GridHeaderContainer;
