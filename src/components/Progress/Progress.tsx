import { useTheme } from 'styled-components';
import { StyledProgress } from './StyledProgress';

export interface IProgressProps {
  type?: 'spinner' | 'linear';
}
const Progress = ({ type = 'spinner' }: IProgressProps): JSX.Element => {
  const theme = useTheme();

  return (
    <StyledProgress aria-label={type} theme={theme} type={type}>
      {type === 'linear' && <div />}
    </StyledProgress>
  );
};

export default Progress;
