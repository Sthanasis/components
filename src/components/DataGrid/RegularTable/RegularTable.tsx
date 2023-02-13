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
        const { scrollLeft } = tableRef.current;
        const left = Math.floor(scrollLeft);
        setScrollLeft(left);
      }
    });
  };
  return (
    <>
      <GridHeaderContainer scrollLeft={scrollLeft} />
      <TableContainer
        ref={tableRef}
        onScroll={handleScroll}
        pagination={!!pagination}
      >
        <RowList />
      </TableContainer>
    </>
  );
};

export default RegularTable;
