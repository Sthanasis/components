import Button, { IButtonProps } from '../components/Button/Button';
import './menuItem.scss';
interface IMenuItemProps extends IButtonProps {
  selected?: boolean;
}

const MenuItem = ({
  selected,
  children,
  ...props
}: IMenuItemProps): JSX.Element => {
  const classList = ['menuItem'];
  if (selected) {
    classList.push('selected');
  }
  return (
    <div className={classList.join(' ')}>
      <Button variant="contained" elevated={false} {...props}>
        {children}
      </Button>
    </div>
  );
};

export default MenuItem;