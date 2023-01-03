import Button from '../Button';
import { MouseEvent, useRef, useState } from 'react';

const Popover = (): JSX.Element => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const click = (e: MouseEvent<HTMLButtonElement>) => {
    setVisible(true);
    const btnDims = e.currentTarget.getBoundingClientRect();
    if (popoverRef.current) {
      console.log(window.innerWidth);
      console.log(window.innerHeight);
      console.log(btnDims);
      const popDims = popoverRef.current.getBoundingClientRect();
      console.log(popDims.height + btnDims.bottom); // the distanse from top top bottom
      console.log(popDims.width + btnDims.left); // the distanse from left to right
      if (popDims.height + btnDims.bottom > window.innerHeight) {
        setCoords({ x: btnDims.x, y: btnDims.height + btnDims.top });
      } else {
        // top position below anchor element
        if (popDims.width + btnDims.left > window.innerWidth) {
          setCoords({
            x: btnDims.right - popDims.width,
            y: btnDims.height + btnDims.top,
          }); // if position is to the top right
        } else {
          setCoords({ x: btnDims.x, y: btnDims.height + btnDims.top }); // if position is to the top left
        }
      }
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
