import { MouseEvent, ReactNode, memo } from 'react';
import { StyledButton } from './StyledButton';
import Ripple from '../Ripple';
import Icon from '../Icon';
import { IButtonProps } from 'src/types';

const Button = ({
  className,
  children,
  color = 'primary',
  variant = 'text',
  elevated = true,
  onClick,
  fullwidth = false,
  contrast = false,
  disabled = false,
  iconStart,
  iconEnd,
  icon,
  style,
  ...rest
}: IButtonProps): JSX.Element => {
  const click = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  let childNodes: ReactNode = (
    <>
      {iconStart && <Icon icon={iconStart} align="start" />}
      {children}
      {iconEnd && <Icon icon={iconEnd} align="end" />}
    </>
  );

  if (icon) {
    childNodes = <Icon icon={icon} />;
  }

  return (
    <StyledButton
      {...rest}
      style={style}
      className={className}
      onClick={click}
      disabled={disabled}
      variant={variant}
      fullwidth={fullwidth}
      contrast={contrast}
      color={color}
      icon={!!icon}
      elevated={elevated}
    >
      <div>{childNodes}</div>
      <Ripple disabled={disabled} />
    </StyledButton>
  );
};

export default memo(Button);
