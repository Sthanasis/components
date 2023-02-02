import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useEffect, useState } from 'react';
import Text from 'src/components/Text';
import { useDatagrid } from 'src/context/datagrid';
import { ICellProps, SortDirectionType } from '../../utilities/types';
import {
  StyledHeaderCell,
  HeaderCellContainer,
  HeaderActionsContainer,
} from './StyledHeaderCell';
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

  const handleMouseEnter = () => {
    if (sortDir === 'default') {
      setSortIcon(faSortAmountUp);
    }
  };

  const handleMouseLeave = () => {
    if (sortDir === 'default') {
      setSortIcon(null);
    }
  };
  useEffect(() => {
    if (field !== sortedBy)
      if (sortDir !== 'default') {
        setSortDir('default');
        setSortIcon(null);
      }
  }, [field, sortedBy]);

  const hasLowerOpacity = sortIcon && sortDir === 'default';
  let opacity = 0;
  if (hasLowerOpacity) {
    opacity = 0.4;
  } else if (sortIcon && sortDir !== 'default') {
    opacity = 1;
  }
  return (
    <StyledHeaderCell
      data-field={field}
      withBorder={withBorder}
      width={width}
      height={height}
      {...rest}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <HeaderCellContainer>
        <Text>{content}</Text>
        <HeaderActionsContainer opacity={opacity}>
          {sortIcon && <Button icon={sortIcon} onClick={handleSorting} />}
        </HeaderActionsContainer>
      </HeaderCellContainer>
    </StyledHeaderCell>
  );
};

export default HeaderCell;
