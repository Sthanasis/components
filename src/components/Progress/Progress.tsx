import { useTheme } from 'styled-components';

interface ILoaderProps {
  type?: 'spinner' | 'linear';
}
const Loader = ({ type = 'spinner' }: ILoaderProps): JSX.Element => {
  const theme = useTheme();

  return (
    <div aria-label={type}>
      {type === 'linear' && (
        <div>
          <div />
          <div />
        </div>
      )}
    </div>
  );
};

export default Loader;
