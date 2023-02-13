import GridControls from './GridControls';
import ColumnList from './ColumnList';
import { StyledContainer } from './StyledGridHeader';

const GridHeaderContainer = ({ scrollLeft }: { scrollLeft: number }) => (
  <StyledContainer>
    <GridControls />
    <div
      style={{
        transform: `translate3d(-${scrollLeft}px,0px,0px)`,
      }}
    >
      <ColumnList />
    </div>
  </StyledContainer>
);

export default GridHeaderContainer;
