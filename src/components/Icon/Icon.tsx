import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IIconProps } from 'src/types';
import { StyledIcon } from './StyledIcon';

const Icon = ({
  icon,
  align = 'middle',
  size = '1x',
  ...props
}: IIconProps): JSX.Element => {
  return (
    <StyledIcon align={align} {...props}>
      <FontAwesomeIcon icon={icon} size={size} />
    </StyledIcon>
  );
};

export default Icon;
