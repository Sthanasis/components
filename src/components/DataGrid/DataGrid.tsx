import { useRef, useState } from 'react';
import DatagridProvider, {
  IDatagridContext,
  useDatagrid,
} from 'src/context/datagrid';
import DataColumns from './DataColumns/DataColumns';
import DataRow from './DataRow/DataRow';
import { Table, TableContainer, Tbody, Thead } from './StyledDataGrid';
import { ROW_HEIGHT } from './utilities/constants';

const Grid = (): JSX.Element => {
  const tableRef = useRef<HTMLDivElement>(null);

  const { columns, rows, height = 500, width } = useDatagrid();
  const [scrollTop, setScrollTop] = useState(0);

  const start = Math.max(0, Math.floor(scrollTop / ROW_HEIGHT) - 20);
  const visibleNodeCount = Math.min(
    rows.length - start,
    Math.ceil(height / ROW_HEIGHT) + 1 * 20
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
    <TableContainer
      height={height}
      width={width}
      ref={tableRef}
      onScroll={handleScroll}
    >
      <div
        style={{
          height: (rows.length + 2) * ROW_HEIGHT,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          <Table>
            <Thead>
              <DataColumns columns={columns} />
            </Thead>
            <Tbody>
              {new Array(visibleNodeCount).fill(null).map((_, index) => (
                <DataRow
                  key={rows[start + index].id}
                  row={rows[start + index]}
                />
              ))}
            </Tbody>
          </Table>
        </div>
      </div>
    </TableContainer>
  );
};

const DataGrid = ({ rows, columns, width, height }: IDatagridContext) => {
  return (
    <DatagridProvider
      rows={rows}
      columns={columns}
      width={width}
      height={height}
    >
      <Grid />
    </DatagridProvider>
  );
};

export default DataGrid;
