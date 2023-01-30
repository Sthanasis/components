import { useRef, useState } from 'react';
import { useDatagrid } from 'src/context/datagrid';
import DataRow from '../DataRow/DataRow';
import { VirtualBody, TableContainer } from '../StyledDataGrid';
import { ROW_HEIGHT } from '../utilities/constants';

const RENDER_AHEAD = 30;

const VirtualTable = (): JSX.Element => {
  const { rows, height } = useDatagrid();
  const tableRef = useRef<HTMLDivElement>(null);

  const totalItems = rows.length;

  const [scrollTop, setScrollTop] = useState(0);

  const start = Math.max(
    0,
    Math.floor(scrollTop / ROW_HEIGHT) - RENDER_AHEAD / 2
  );
  const visibleNodeCount = Math.min(
    rows.length - start,
    Math.ceil(height / ROW_HEIGHT) + RENDER_AHEAD
  );
  const offsetY = start * ROW_HEIGHT;

  const handleScroll = () => {
    requestAnimationFrame(() => {
      if (tableRef.current) {
        setScrollTop(tableRef.current?.scrollTop);
      }
    });
  };
  return (
    <TableContainer ref={tableRef} onScroll={handleScroll}>
      <VirtualBody
        style={{
          height: totalItems * ROW_HEIGHT,
        }}
      >
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {new Array(visibleNodeCount).fill(null).map((_, index) => (
            <DataRow
              key={rows[start + index].id}
              row={rows[start + index]}
              noBorder={start + index + 1 === totalItems}
            />
          ))}
        </div>
      </VirtualBody>
    </TableContainer>
  );
};

export default VirtualTable;
