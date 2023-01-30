import HeaderCell from '../HeaderCell';
import { ColumnType } from '../utilities/types';
import { StyledGridHeader } from './StyledGridHeader';

interface IGridHeaderProps {
  columns: ColumnType[];
}

const GridHeader = ({ columns }: IGridHeaderProps): JSX.Element => {
  return (
    <StyledGridHeader>
      {columns.map((c) => (
        <HeaderCell
          key={c.field}
          field={c.field}
          value={c.name}
          width={c.width}
          height="auto"
        />
      ))}
    </StyledGridHeader>
  );
};

export default GridHeader;
