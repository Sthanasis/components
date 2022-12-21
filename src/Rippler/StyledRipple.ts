import styled from "styled-components";
import { ripple } from "../../styled/animations";

interface IRipperContainerProps {
  color: string;
  duration: number;
}
export const RippleContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  span {
    transform: scale(0);
    border-radius: 100%;
    overflow: hidden;
    position: absolute;
    opacity: 0.75;
    background-color: ${({ color }: IRipperContainerProps) => color};
    animation-name: ${ripple};
    animation-duration: ${({ duration }: IRipperContainerProps) => duration}ms;
  }
`;
