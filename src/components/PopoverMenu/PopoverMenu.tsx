import { ReactNode } from 'react';
import useAnchoreElement from 'src/utilities/hooks/useAnchorElement';
import Button from '../Button';
import Popover from '../Popover/Popover';
import { StyledPopoverMenu } from './PopoverMenu.styled';

interface IPopoverContentProps {
  closePopover: () => void;
}

interface IPopoverMenuProps {
  label?: string;
  content: (props: IPopoverContentProps) => ReactNode;
}

const PopoverMenu = ({ label, content }: IPopoverMenuProps): JSX.Element => {
  const { anchorEl, visible, showPopover, closePopover } = useAnchoreElement();

  return (
    <StyledPopoverMenu>
      <Button onClick={showPopover}>{label}</Button>
      <Popover anchorEl={anchorEl} visible={visible} onClose={closePopover}>
        {content({ closePopover })}
      </Popover>
    </StyledPopoverMenu>
  );
};

export default PopoverMenu;
