import { useMemo, useRef, useState } from 'react';
import { useDatagrid } from 'src/context/datagrid';
import DataRow from '../DataRow/DataRow';
import { VirtualBody, TableContainer } from '../../StyledDataGrid';
import { RENDER_AHEAD } from '../../utilities/constants';
import GridHeaderContainer from '../../GridHeader/GridHeaderContainer';
import GridSpinner from '../GridSpinner';

const VirtualTable = (): JSX.Element => {
  const { rows, height, loading, density } = useDatagrid();
  const tableRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const totalItems = rows.length;

  const [scrollTop, setScrollTop] = useState(0);

  const start = useMemo(
    () => Math.max(0, Math.floor(scrollTop / density) - RENDER_AHEAD / 2),
    [scrollTop]
  );

  const visibleNodesArray = useMemo(() => {
    const count = Math.min(
      rows.length - start,
      Math.ceil(height / density) + RENDER_AHEAD
    );

    return new Array(count > 0 ? count : 0).fill(null);
  }, [start, rows]);

  const offsetY = start * density;

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
              height: totalItems * density,
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
