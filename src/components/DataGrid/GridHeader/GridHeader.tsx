import { memo } from 'react';
import { useDatagrid } from 'src/context/datagrid';
import HeaderCell from './HeaderCell';

import { StyledGridHeader } from './StyledGridHeader';

const GridHeader = (): JSX.Element => {
  const { columns } = useDatagrid();

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

export default memo(GridHeader);
