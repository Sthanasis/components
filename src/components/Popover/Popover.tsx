import { createPortal } from 'react-dom';
import {
  MouseEvent,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { StyledPopover } from './StyledPopover';
import { IBaseProps } from 'src/types';
import Backdrop from '../Backdrop';
import useWindowResize from 'src/utilities/hooks/useWindowResize';

export interface IPopoverProps extends IBaseProps {
  onClose: () => void;
  anchorEl?: HTMLButtonElement | null;
  children: ReactNode;
  visible: boolean;
  handleClick?: (e: MouseEvent<HTMLDivElement>) => void;
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
      return anchor.x - popup.width + anchor.width;
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
  handleClick,
  ...rest
}: IPopoverProps): JSX.Element | null => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);
  const [show, setShow] = useState(false);

  const windowIsResized = useWindowResize();

  const anchorToElement = () => {
    if (anchorEl && popoverRef.current) {
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

  const handleBackdropClick = (e?: MouseEvent<HTMLDivElement>) => {
    if (e) {
      if (popoverRef.current?.contains(e.target as Node)) return;
    }
    setCoords(null);
    setShow(false);
    onClose();
  };

  useEffect(() => {
    if (show) anchorToElement(); // this avoids flickering on render
  }, [show]);

  useEffect(() => {
    if (visible) {
      setShow(true);
      document.body.style.overflow = 'hidden';
    } else {
      setShow(false);
      document.body.style.overflow = 'auto';
    }
  }, [visible]);

  useLayoutEffect(() => {
    if (!windowIsResized) anchorToElement();
  }, [windowIsResized]);

  if (show)
    return createPortal(
      <Backdrop onClose={handleBackdropClick}>
        <StyledPopover
          {...rest}
          x={coords?.x}
          y={coords?.y}
          visible={show}
          ref={popoverRef}
          onClick={handleClick}
        >
          {children}
        </StyledPopover>
      </Backdrop>,
      document.body
    );

  return null;
};

export default Popover;
