import HeaderCell from '../HeaderCell';
import { ColumnType } from '../utilities/types';
import { StyledDataColumns } from './StyledDataColumns';

interface IDataColumnsProps {
  columns: ColumnType[];
}

const DataColumns = ({ columns }: IDataColumnsProps): JSX.Element => {
  return (
    <StyledDataColumns>
      {columns.map((c) => (
        <HeaderCell
          key={c.field}
          field={c.field}
          value={c.name}
          height="auto"
        />
      ))}
    </StyledDataColumns>
  );
};

export default DataColumns;
