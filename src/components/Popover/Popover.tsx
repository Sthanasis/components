import Button from '../Button';
import { MouseEvent } from 'react';

const Popover = (): JSX.Element => {
  const click = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget);
  };

  return <Button onClick={click}>click me</Button>;
};

export default Popover;
