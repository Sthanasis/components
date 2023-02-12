import { ReactNode } from 'react';
import { IBaseProps } from 'src/types';
import { StyledMenuItem } from './MenuItem.styled';

interface IMenuItemProps extends IBaseProps {
  selected?: boolean;
  children?: ReactNode;
  value: string | number;
  onClick: (arg: number | string) => void;
}

const MenuItem = ({
  selected,
  children,
  value,
  onClick,
  ...props
}: IMenuItemProps): JSX.Element => (
  <StyledMenuItem
    role="button"
    selected={!!selected}
    aria-label={props['aria-label']}
    onClick={onClick.bind(this, value)}
  >
    {children ?? value}
  </StyledMenuItem>
);

export default MenuItem;
