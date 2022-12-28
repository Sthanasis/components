import { ThemeVariantType } from 'src/types/types';
import { useTheme } from 'styled-components';
import { StyledProgress } from './StyledProgress';

export interface IProgressProps {
  type?: 'spinner' | 'linear';
  color?: ThemeVariantType;
}
const Progress = ({
  type = 'spinner',
  color = 'primary',
}: IProgressProps): JSX.Element => {
  const theme = useTheme();

  return (
    <StyledProgress aria-label={type} theme={theme} type={type} color={color}>
      {type === 'linear' && <div />}
    </StyledProgress>
  );
};

export default Progress;
