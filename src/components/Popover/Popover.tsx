import { createPortal } from 'react-dom';
import { MouseEvent, ReactNode, useEffect, useRef, useState } from 'react';
import { StyledPopover } from './StyledPopover';
import { IBaseProps } from 'src/types/props';
import Backdrop from '../Backdrop';

interface IPopoverProps extends IBaseProps {
  onClose?: () => void | Promise<void>;
  anchorEl?: HTMLButtonElement | null;
  children: ReactNode;
  visible: boolean;
}

type XPositionType = 'right' | 'left' | 'default';
type YPositionType = 'top' | 'bottom';
const getPositionX = (
  anchor: DOMRect,
  popup: DOMRect,
  position: XPositionType
) => {
  switch (position) {
    case 'left':
      return anchor.left;
    case 'right':
      return anchor.right - popup.width;
    default:
      return anchor.left - popup.width / 4;
  }
};

const getPositionY = (
  anchor: DOMRect,
  popup: DOMRect,
  position: YPositionType
) => {
  if (position === 'bottom')
    return anchor.bottom - anchor.height - popup.height;
  else return anchor.top + anchor.height;
};

const Popover = ({
  onClose,
  children,
  anchorEl,
  visible,
}: IPopoverProps): JSX.Element | null => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);
  const [show, setShow] = useState(false);

  const anchorToElement = () => {
    if (anchorEl && popoverRef.current) {
      document.body.style.overflow = 'hidden';
      const anchorRect = anchorEl.getBoundingClientRect();
      let positionX: XPositionType = 'default';
      let positionY: YPositionType = 'top';

      const popRect = popoverRef.current.getBoundingClientRect();
      const isToTheRightEdge =
        anchorRect.right + popRect.width / 4 > window.innerWidth;
      const isToTheLeftEdge = anchorRect.left < popRect.width / 4;
      if (isToTheRightEdge) {
        positionX = 'right';
      } else if (isToTheLeftEdge) {
        positionX = 'left';
      }
      if (popRect.height + anchorRect.bottom > window.innerHeight) {
        positionY = 'bottom';
      }

      setCoords({
        x: getPositionX(anchorRect, popRect, positionX),
        y: getPositionY(anchorRect, popRect, positionY),
      });
    }
  };

  const handleClose = (e: MouseEvent<HTMLDivElement>) => {
    if (popoverRef.current?.contains(e.target as Node)) return;
    if (onClose) onClose();
    setCoords(null);
    document.body.style.overflow = '';
    setShow(false);
  };

  useEffect(() => {
    if (show) anchorToElement();
  }, [show]);

  useEffect(() => {
    if (visible) setShow(true);
  }, [visible]);

  if (show)
    return createPortal(
      <Backdrop onClick={handleClose}>
        <StyledPopover
          x={coords?.x}
          y={coords?.y}
          visible={show}
          ref={popoverRef}
          onKeyDown={(e) => console.log(e)}
        >
          {children}
        </StyledPopover>
      </Backdrop>,
      document.body
    );

  return null;
};

export default Popover;
