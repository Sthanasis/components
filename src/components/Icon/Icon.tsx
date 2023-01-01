import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IBaseProps } from 'src/types/props';
import { StyledIcon } from './StyledIcon';

export type IconAlignType = 'start' | 'end' | 'middle';

interface IIconProps extends IBaseProps {
  icon: IconProp;
  align?: IconAlignType;
  size?: SizeProp;
}

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
