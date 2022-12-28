import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledIcon } from './StyledIcon';

export type IconAlignType = 'start' | 'end' | 'middle';

interface IIconProps {
  icon: IconProp;
  align?: IconAlignType;
  size?: SizeProp;
}

const Icon = ({
  icon,
  align = 'middle',
  size = '1x',
}: IIconProps): JSX.Element => {
  return (
    <StyledIcon align={align}>
      <FontAwesomeIcon icon={icon} size={size} />
    </StyledIcon>
  );
};

export default Icon;
