import { useRef, useState } from 'react';
import DatagridProvider, { useDatagrid } from 'src/context/datagrid';
import GridHeaderContainer from './GridHeader/GridHeaderContainer';
import { Table, TableContainer } from './StyledDataGrid';
import { IDataGridProps } from './utilities/types';
import VirtualTable from './GridBody/VirtualTable';
import RowList from './GridBody/RowList';

const RegularTable = () => {
  const [scrollLeft, setScrollLeft] = useState<number>(0);
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
      <TableContainer ref={tableRef} onScroll={handleScroll}>
        <RowList />
      </TableContainer>
    </>
  );
};

const Grid = ({ bigDataset }: { bigDataset?: boolean }): JSX.Element => {
  const { height, width } = useDatagrid();
  const content = bigDataset ? <VirtualTable /> : <RegularTable />;
  return (
    <Table height={height} width={width}>
      {content}
    </Table>
  );
};

const DataGrid = ({ bigDataset, ...rest }: IDataGridProps) => (
  <DatagridProvider {...rest}>
    <Grid bigDataset={bigDataset} />
  </DatagridProvider>
);

export default DataGrid;
