import { MouseEvent, ReactNode, memo } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useTheme } from 'styled-components';
import { IBaseProps } from 'src/types';
import type { ThemeVariantType, ButtonType } from 'src/types/types';
import { StyledButton } from './StyledButton';
import Ripple from '../Ripple';
import Icon from '../Icon';

export interface IButtonProps extends IBaseProps {
  children?: React.ReactNode | React.ReactNode[];
  variant?: ButtonType;
  color?: ThemeVariantType;
  elevated?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  fullwidth?: boolean;
  contrast?: boolean;
  disabled?: boolean;
  iconStart?: IconProp;
  iconEnd?: IconProp;
  icon?: IconProp;
}

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
  const theme = useTheme();

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
      theme={theme}
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
