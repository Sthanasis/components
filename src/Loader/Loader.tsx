import { useTheme } from 'src/context/theme';
import './loader.scss';

interface ILoaderProps {
  type?: 'spinner' | 'linear';
}
const Loader = ({ type = 'spinner' }: ILoaderProps): JSX.Element => {
  const { theme } = useTheme();
  const classList = ['loader', theme, type];

  return (
    <div className={classList.join(' ')} aria-label={type}>
      {type === 'linear' && (
        <div className={theme}>
          <div className={`before ${theme}`} />
          <div className={`after ${theme}`} />
        </div>
      )}
    </div>
  );
};

export default Loader;
