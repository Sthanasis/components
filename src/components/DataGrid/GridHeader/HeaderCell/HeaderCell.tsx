import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useCallback, useEffect, useState } from 'react';
import Text from 'src/components/Text';
import { useDatagrid } from 'src/context/datagrid';
import { ICellProps, SortDirectionType } from '../../utilities/types';
import { StyledHeaderCell, HeaderCellContainer } from './StyledHeaderCell';
import {
  faSortAmountDown,
  faSortAmountUp,
} from '@fortawesome/free-solid-svg-icons';
import Button from 'src/components/Button';

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
  const [sortIcon, setSortIcon] = useState<IconDefinition | null>(null);
  const content = value ?? '';
  const { handleColumnSort, sortedBy } = useDatagrid();

  const handleSorting = () => {
    const newSortDir = getNextSortOrder(sortDir).next;
    const nextDirection = getNextSortOrder(sortDir).next;
    const newIcon = getNextSortOrder(nextDirection).icon;
    setSortIcon(newIcon);
    if (handleColumnSort) {
      handleColumnSort(field, newSortDir);
      setSortDir(newSortDir);
    }
  };

  const handleMouseOver = useCallback(() => {
    if (sortDir === 'default') {
      setSortIcon(faSortAmountUp);
    }
  }, [sortDir]);

  const handleMouseLeave = useCallback(() => {
    if (sortDir === 'default') {
      setSortIcon(null);
    }
  }, [sortDir]);
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
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <HeaderCellContainer>
        <Text>{content}</Text>
        {sortIcon && <Button icon={sortIcon} onClick={handleSorting} />}
      </HeaderCellContainer>
    </StyledHeaderCell>
  );
};

export default HeaderCell;
