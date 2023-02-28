import { useState, useRef } from 'react';
import { useDatagrid } from 'src/context/datagrid';
import RowList from '../GridBody/RowList';
import GridHeaderContainer from '../GridHeader/GridHeaderContainer';
import { TableContainer } from '../StyledDataGrid';

const RegularTable = () => {
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const { pagination } = useDatagrid();
  const tableRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    requestAnimationFrame(() => {
      if (tableRef.current) {
        setScrollLeft(Math.ceil(tableRef.current.scrollLeft));
      }
    });
  };
  return (
    <>
      <GridHeaderContainer scrollLeft={scrollLeft} />
      <TableContainer
        ref={tableRef}
        pagination={!!pagination}
        onScroll={handleScroll}
      >
        <RowList />
        <div style={{ transform: `translateX(-${scrollLeft}px)` }}></div>
      </TableContainer>
    </>
  );
};

export default RegularTable;
