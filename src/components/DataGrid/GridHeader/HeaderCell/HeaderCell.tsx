import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useEffect, useState } from 'react';
import Text from 'src/components/Text';
import { useDatagrid } from 'src/context/datagrid';
import { ICellProps, SortDirectionType } from '../../utilities/types';
import { StyledHeaderCell, HeaderCellContainer } from './StyledHeaderCell';
import {
  faSortAmountDown,
  faSortAmountUp,
} from '@fortawesome/free-solid-svg-icons';
import Icon from 'src/components/Icon';

type OrderMapType = {
  [key in SortDirectionType]: {
    icon: IconDefinition | null;
    next: SortDirectionType;
  };
};

const getNextSortOrder = (direction: SortDirectionType) => {
  const map: OrderMapType = {
    default: {
      icon: null,
      next: 'asc',
    },
    asc: {
      icon: faSortAmountUp,
      next: 'desc',
    },
    desc: {
      icon: faSortAmountDown,
      next: 'default',
    },
  };
  return map[direction];
};

const HeaderCell = ({
  value,
  field,
  withBorder = false,
  width,
  height,
  ...rest
}: ICellProps) => {
  const [sortDir, setSortDir] = useState<SortDirectionType>('default');
  const content = value ?? '';
  const { handleColumnSort, sortedBy } = useDatagrid();

  const handleSorting = () => {
    const newSortDir = getNextSortOrder(sortDir).next;
    if (handleColumnSort) {
      handleColumnSort(field, newSortDir);
      setSortDir(newSortDir);
    }
  };
  const sortIcon = getNextSortOrder(sortDir).icon;

  useEffect(() => {
    if (field !== sortedBy) if (sortDir !== 'default') setSortDir('default');
  }, [field, sortedBy]);

  return (
    <StyledHeaderCell
      data-field={field}
      withBorder={withBorder}
      width={width}
      height={height}
      {...rest}
      onClick={handleSorting}
    >
      <HeaderCellContainer>
        <Text>{content}</Text>
        {sortedBy === field && sortIcon && <Icon icon={sortIcon} />}
      </HeaderCellContainer>
    </StyledHeaderCell>
  );
};

export default HeaderCell;
