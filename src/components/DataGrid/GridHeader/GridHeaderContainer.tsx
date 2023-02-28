import GridControls from './GridControls';
import ColumnList from './ColumnList';
import { StyledContainer } from './StyledGridHeader';

const GridHeaderContainer = ({ scrollLeft }: { scrollLeft: number }) => (
  <StyledContainer>
    <GridControls />
    <ColumnList
      style={{
        transform: `translateX(-${scrollLeft}px)`,
        width: 'max-content',
      }}
    />
  </StyledContainer>
);

export default GridHeaderContainer;
