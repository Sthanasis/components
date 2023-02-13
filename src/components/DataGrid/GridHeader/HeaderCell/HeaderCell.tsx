import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { DragEvent, useEffect, useState } from 'react';
import Text from 'src/components/Text';
import { useDatagrid } from 'src/context/datagrid';
import { IHeaderCellProps, SortDirectionType } from 'src/types';
import {
  StyledHeaderCell,
  HeaderActionsContainer,
  StyledHeaderCellContainer,
  StyledCellBorder,
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
  width,
  height,
  index,
  ...rest
}: IHeaderCellProps) => {
  const [sortDir, setSortDir] = useState<SortDirectionType>('default');
  const [sortIcon, setSortIcon] = useState<IconDefinition | null>(null);
  const [grabed, setGrabed] = useState(false);

  const {
    sortedBy,
    loading,
    handleColumnSort,
    handleHeaderColumnGrab,
    handleHeaderColumnDrop,
  } = useDatagrid();

  const handleSorting = () => {
    const newSortDir = getNextSortOrder(sortDir).next;
    const nextDirection = getNextSortOrder(sortDir).next;
    const newIcon = getNextSortOrder(nextDirection).icon;
    setSortIcon(newIcon);
    handleColumnSort(field, newSortDir);
    setSortDir(newSortDir);
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

  const handleGrab = (e: DragEvent<HTMLDivElement>) => {
    setGrabed(true);
    handleHeaderColumnGrab(e, index);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    handleHeaderColumnDrop(e, index);
    setGrabed(false);
  };

  useEffect(() => {
    if (field !== sortedBy)
      if (sortDir !== 'default') {
        setSortDir('default');
        setSortIcon(null);
      }
  }, [field, sortedBy]);

  const hasLowerOpacity = sortIcon && sortDir === 'default';
  const content = value ?? '';
  let opacity = 0;
  if (hasLowerOpacity) {
    opacity = 0.4;
  } else if (sortIcon && sortDir !== 'default') {
    opacity = 1;
  }

  return (
    <StyledHeaderCellContainer width={width} height={height}>
      <StyledHeaderCell
        data-field={field}
        width={width}
        height={height}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onDragStart={handleGrab}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        grabed={grabed}
        draggable
        {...rest}
      >
        <Text>{content}</Text>
        <HeaderActionsContainer opacity={opacity}>
          {sortIcon && (
            <Button
              icon={sortIcon}
              onClick={handleSorting}
              disabled={loading}
            />
          )}
        </HeaderActionsContainer>
      </StyledHeaderCell>
      <StyledCellBorder>|</StyledCellBorder>
    </StyledHeaderCellContainer>
  );
};

export default HeaderCell;
