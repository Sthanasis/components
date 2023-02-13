import { ReactNode } from 'react';
import { IBaseProps } from 'src/types';
import { StyledMenuItem } from './MenuItem.styled';

interface IMenuItemProps extends IBaseProps {
  selected?: boolean;
  children?: ReactNode;
  value: string | number;
}

const MenuItem = ({
  selected,
  children,
  value,

  ...props
}: IMenuItemProps): JSX.Element => (
  <StyledMenuItem
    role="button"
    value={value}
    isselected={!!selected}
    aria-label={props['aria-label']}
  >
    {children ?? value}
  </StyledMenuItem>
);

export default MenuItem;
