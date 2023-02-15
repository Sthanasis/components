import { IProgressProps } from 'src/types';
import { StyledProgress } from './StyledProgress';

const Progress = ({
  type = 'spinner',
  color = 'primary',
}: IProgressProps): JSX.Element => {
  return (
    <StyledProgress aria-label={type} type={type} color={color}>
      {type === 'linear' && <div />}
    </StyledProgress>
  );
};

export default Progress;
