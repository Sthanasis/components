import { useState, useLayoutEffect, MouseEvent } from "react";
import { RippleContainer } from "./StyledRipple";
interface IRippleProps {
  duration?: number;
  color?: string;
}

type RippleType = {
  x: number;
  y: number;
  size: number;
};
const useDebouncedRippleCleanUp = (
  rippleCount: number,
  duration: number,
  cleanUpFunction: () => void
) => {
  useLayoutEffect(() => {
    let bounce: NodeJS.Timeout | number = 0;
    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, duration, cleanUpFunction]);
};

const Ripple = ({ duration = 600, color = "#fff" }: IRippleProps) => {
  const [rippleArray, setRippleArray] = useState<RippleType[]>([]);

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  const addRipple = (event: MouseEvent<HTMLDivElement>) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = event.pageX - rippleContainer.x - size / 2;
    const y = event.pageY - rippleContainer.y - size / 2;
    const newRipple = {
      x,
      y,
      size,
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <RippleContainer duration={duration} color={color} onMouseDown={addRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              key={"span" + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          );
        })}
    </RippleContainer>
  );
};

export default Ripple;
