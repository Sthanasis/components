import Button from '../Button';
import { MouseEvent, useRef, useState } from 'react';

const Popover = (): JSX.Element => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const click = (e: MouseEvent<HTMLButtonElement>) => {
    setVisible(true);
    const { x, y, height, width, bottom, top } =
      e.currentTarget.getBoundingClientRect();
    if (popoverRef.current) {
      const {
        x: pX,
        y: pY,
        height: pHeight,
      } = popoverRef.current.getBoundingClientRect();
      if (pHeight < height + top) {
        setCoords({ x: x, y: height + top });
      } else {
        // position below button
        setCoords({ x: x, y: height + top });
      }
      console.log(pX, pY, x, y);
    }
  };

  return (
    <>
      <Button onClick={click}>click me</Button>
      <div
        style={{
          position: 'absolute',
          visibility: visible ? 'visible' : 'hidden',
          zIndex: 10,
          padding: 10,
          backgroundColor: 'beige',
          top: coords.y,
          left: coords.x,
        }}
        ref={popoverRef}
      >
        <div>testttttttttttttttttttttttttttttttt</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </div>
    </>
  );
};

export default Popover;
