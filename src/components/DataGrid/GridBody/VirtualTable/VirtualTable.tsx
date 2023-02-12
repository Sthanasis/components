import { useMemo, useRef, useState } from 'react';
import { useDatagrid } from 'src/context/datagrid';
import DataRow from '../DataRow/DataRow';
import { VirtualBody, TableContainer } from '../../StyledDataGrid';
import { ROW_HEIGHT } from '../../utilities/constants';
import GridHeaderContainer from '../../GridHeader/GridHeaderContainer';
import GridSpinner from '../GridSpinner';

const RENDER_AHEAD = 10;

const VirtualTable = (): JSX.Element => {
  const { rows, height, loading } = useDatagrid();
  const tableRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const totalItems = rows.length;

  const [scrollTop, setScrollTop] = useState(0);

  const start = useMemo(
    () => Math.max(0, Math.floor(scrollTop / ROW_HEIGHT) - RENDER_AHEAD / 2),
    [scrollTop]
  );

  const visibleNodesArray = useMemo(() => {
    const count = Math.min(
      rows.length - start,
      Math.ceil(height / ROW_HEIGHT) + RENDER_AHEAD
    );

    return new Array(count > 0 ? count : 0).fill(null);
  }, [start, rows]);

  const offsetY = start * ROW_HEIGHT;

  const handleScroll = () => {
    requestAnimationFrame(() => {
      if (tableRef.current) {
        const { scrollLeft } = tableRef.current;
        const left = Math.floor(scrollLeft);
        setScrollLeft(left);
        setScrollTop(tableRef.current?.scrollTop);
      }
    });
  };

  return (
    <>
      <GridHeaderContainer scrollLeft={scrollLeft} />
      <TableContainer ref={tableRef} onScroll={handleScroll} pagination={false}>
        {loading ? (
          <GridSpinner />
        ) : (
          <VirtualBody
            style={{
              height: totalItems * ROW_HEIGHT,
            }}
          >
            <div style={{ transform: `translate3d(0px,${offsetY}px,0px)` }}>
              {visibleNodesArray.map((_, index) => (
                <DataRow
                  key={rows[start + index].id}
                  row={rows[start + index]}
                  noBorder={start + index + 1 === totalItems}
                />
              ))}
            </div>
          </VirtualBody>
        )}
      </TableContainer>
    </>
  );
};

export default VirtualTable;
