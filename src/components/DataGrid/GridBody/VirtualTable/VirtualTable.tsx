import { useMemo, useRef, useState } from 'react';
import { useDatagrid } from 'src/context/datagrid';
import DataRow from '../DataRow/DataRow';
import { VirtualBody, TableContainer } from '../../StyledDataGrid';
import { RENDER_AHEAD } from '../../utilities/constants';
import GridHeaderContainer from '../../GridHeader/GridHeaderContainer';
import GridSpinner from '../GridSpinner';

const VirtualTable = (): JSX.Element => {
  const { rows, height, loading, density, densityOptions } = useDatagrid();
  const rowHeight = densityOptions[density];
  const tableRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const totalItems = rows.length;

  const [scrollTop, setScrollTop] = useState(0);

  const start = useMemo(
    () => Math.max(0, Math.floor(scrollTop / rowHeight) - RENDER_AHEAD / 2),
    [scrollTop, rowHeight]
  );

  const visibleNodesArray = useMemo(() => {
    const count = Math.min(
      totalItems - start,
      Math.ceil(height / rowHeight) + RENDER_AHEAD
    );

    return new Array(count > 0 ? count : 0).fill(null);
  }, [start, totalItems, height, rowHeight]);

  const offsetY = start * rowHeight;

  const handleScroll = () => {
    requestAnimationFrame(() => {
      if (tableRef.current) {
        const { scrollLeft, scrollTop } = tableRef.current;
        setScrollLeft(scrollLeft);
        setScrollTop(scrollTop);
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
              height: totalItems * rowHeight,
            }}
          >
            <div
              style={{
                transform: `translate3d(0px,${offsetY}px,0px)`,
              }}
            >
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
