import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { VirtaulListContainer, VirtualListBody } from './VirtualList.styled';

interface IRenderItemProps<T> {
  row: T;
  rowIndex: number;
}

interface IVirtualListProps {
  rowHeight: number;
  renderAhead: number;
  rows: any[];
  height: number;
  renderItem?: <T>({
    row,
    rowIndex,
  }: IRenderItemProps<T>) => JSX.Element | null;
}

const VirtualList = ({
  rowHeight,
  renderAhead,
  rows,
  height,
  renderItem,
}: IVirtualListProps): JSX.Element => {
  const listRef = useRef<HTMLDivElement | null>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [visibleNodesArray, setVisibleNodesArray] = useState([
    ...new Int32Array(renderAhead),
  ]);
  const totalItems = rows.length;
  const start = useMemo(
    () => Math.max(0, Math.ceil(scrollTop / rowHeight) - renderAhead / 2),
    [scrollTop, rowHeight]
  );

  useLayoutEffect(() => {
    const count = Math.min(
      totalItems - start,
      Math.ceil(height / rowHeight) + renderAhead
    );

    setVisibleNodesArray([...new Int32Array(count > 0 ? count : 0)]);
  }, [start, totalItems, height, rowHeight, renderAhead]);

  const offsetY = start * rowHeight;
  const containerHeight = totalItems * rowHeight;

  const handleScroll = () => {
    if (listRef.current) {
      const { scrollTop } = listRef.current;
      setScrollTop(scrollTop);
    }
  };
  return (
    <VirtaulListContainer ref={listRef} height={height} onScroll={handleScroll}>
      <VirtualListBody style={{ height: containerHeight }}>
        <div
          style={{
            transform: `translate3d(0px,${offsetY}px,0px)`,
          }}
        >
          {visibleNodesArray.map((_, index) =>
            renderItem ? (
              renderItem({ row: rows[start + index], rowIndex: start + index })
            ) : (
              <div style={{ height: rowHeight }} key={start + index}>
                {start + index}
              </div>
            )
          )}
        </div>
      </VirtualListBody>
    </VirtaulListContainer>
  );
};

export default VirtualList;
