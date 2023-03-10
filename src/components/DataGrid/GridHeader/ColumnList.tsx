import { CSSProperties, memo } from 'react';
import { useDatagrid } from 'src/context/datagrid';
import HeaderCell from './HeaderCell';

import { StyledHeaderList } from './StyledGridHeader';

const ColumnList = ({ style }: { style: CSSProperties }): JSX.Element => {
  const { columns } = useDatagrid();

  return (
    <StyledHeaderList style={style}>
      {columns.map(
        (c, i) =>
          !c.hideColumn && (
            <HeaderCell
              key={c.field}
              field={c.field}
              value={c.name}
              width={c.width}
              index={i}
              height="auto"
            />
          )
      )}
    </StyledHeaderList>
  );
};

export default memo(ColumnList);
