import { IMenuItemProps } from 'src/types';
import { StyledMenuItem } from './MenuItem.styled';

const MenuItem = ({
  selected,
  children,
  value,

  ...props
}: IMenuItemProps): JSX.Element => (
  <StyledMenuItem
    role="option"
    value={value}
    isselected={!!selected}
    aria-label={props['aria-label']}
  >
    {children ?? value}
  </StyledMenuItem>
);

export default MenuItem;
