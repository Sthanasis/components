import Button from '../../components/Button';
import { IButtonProps } from '../Button/Button';
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
      <Button buttonType="contained" elevated={false} {...props}>
        {children}
      </Button>
    </div>
  );
};

export default MenuItem;
