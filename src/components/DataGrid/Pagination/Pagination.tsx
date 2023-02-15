import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
} from '@fortawesome/free-solid-svg-icons';
import Box from 'src/components/Box';
import Button from 'src/components/Button';

import MenuItem from 'src/components/MenuItem';
import PopoverMenu from 'src/components/PopoverMenu';
import Text from 'src/components/Text';
import { useDatagrid } from 'src/context/datagrid';
import { StyledPaginationContainer } from './Pagination.styled';

const RowsPerPage = ({
  title,
  options,
  rowsPerPage,
  onRowsPerPageChange,
}: {
  title: string;
  options: number[];
  rowsPerPage: number;
  onRowsPerPageChange: (arg: number) => void;
}) => {
  return (
    <PopoverMenu label={title} onChange={(v) => onRowsPerPageChange(+v)}>
      {options.map((option) => (
        <MenuItem
          key={`pagePerOption${option}`}
          value={option}
          selected={option === rowsPerPage}
        />
      ))}
    </PopoverMenu>
  );
};

const Pagination = (): JSX.Element => {
  const { pagination } = useDatagrid();
  const {
    page,
    pageSize,
    onPageChange,
    onRowsPerPageChange,
    rowsPerPageOptions,
    total,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  } = pagination!;

  const handlePageChange = (p: number) => {
    if (onPageChange) onPageChange(p);
  };

  const handleRowsPerPageChange = (arg: number) => {
    if (onRowsPerPageChange) {
      onRowsPerPageChange(arg);
    }
  };

  const handleGoToLastPage = () => {
    const lastPageIndex = Math.ceil(total / pageSize);
    handlePageChange(lastPageIndex - 1);
  };

  const handleGoToFirstPage = () => {
    handlePageChange(0);
  };

  const startIndicator = pageSize * page + 1;
  let endIndicator = pageSize * (page + 1);
  endIndicator = total < endIndicator ? total : endIndicator;
  return (
    <StyledPaginationContainer>
      <Box style={{ alignItems: 'center' }}>
        <Text style={{ marginRight: 5 }}>Rows Per Page:</Text>
        <RowsPerPage
          title={pageSize.toString()}
          onRowsPerPageChange={handleRowsPerPageChange}
          rowsPerPage={pageSize}
          options={rowsPerPageOptions}
        />
      </Box>

      <Box style={{ margin: '0px 10px' }}>
        <Text>
          {`${startIndicator} - ${endIndicator}`} of {total}
        </Text>
      </Box>
      <Box style={{ margin: 5 }}>
        <Button
          rounded
          disabled={page === 0}
          icon={faAnglesLeft}
          onClick={handleGoToFirstPage}
        />
        <Button
          rounded
          disabled={page === 0}
          icon={faAngleLeft}
          onClick={() => handlePageChange(page - 1)}
        />
        <Button
          rounded
          disabled={endIndicator === total}
          icon={faAngleRight}
          onClick={() => handlePageChange(page + 1)}
        />
        <Button
          rounded
          disabled={endIndicator === total}
          icon={faAnglesRight}
          onClick={handleGoToLastPage}
        />
      </Box>
    </StyledPaginationContainer>
  );
};

export default Pagination;
