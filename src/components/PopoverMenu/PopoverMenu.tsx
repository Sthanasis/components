import { MouseEvent } from 'react';
import { IPopoverMenuProps } from 'src/types';
import useAnchoreElement from 'src/utilities/hooks/useAnchorElement';
import Button from '../Button';
import Popover from '../Popover/Popover';
import { StyledPopoverMenu } from './PopoverMenu.styled';

const PopoverMenu = ({
  label,
  children,
  onChange,
}: IPopoverMenuProps): JSX.Element => {
  const { anchorEl, visible, showPopover, closePopover } = useAnchoreElement();
  const handleChange = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLOptionElement;
    if (target.value) {
      if (onChange) onChange(target.value);
    }
    closePopover();
  };

  return (
    <StyledPopoverMenu>
      <Button onClick={showPopover}>{label}</Button>
      <Popover
        anchorEl={anchorEl}
        visible={visible}
        onClose={closePopover}
        handleClick={handleChange}
      >
        {children}
      </Popover>
    </StyledPopoverMenu>
  );
};

export default PopoverMenu;
