import { MouseEvent, ReactNode, memo } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useTheme } from 'styled-components';
import { IBaseProps } from 'src/types/props';
import { ButtonContainer } from './StyledButton';
import Ripple from 'src/components/Ripple';
import type { ThemeVariantType, ButtonType } from 'src/types/types';
import Icon from '../Icon';

export interface IButtonProps extends IBaseProps {
  children?: React.ReactNode | React.ReactNode[];
  buttonType?: ButtonType;
  variant?: ThemeVariantType;
  elevated?: boolean;
  onClick?: (...args: unknown[]) => unknown;
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
  variant = 'primary',
  buttonType = 'text',
  elevated = true,
  onClick,
  fullwidth = false,
  contrast = false,
  disabled = false,
  iconStart,
  iconEnd,
  testId,
  icon,
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
    <ButtonContainer
      className={className}
      onClick={click}
      disabled={disabled}
      data-testid={testId}
      buttonType={buttonType}
      fullwidth={fullwidth}
      theme={theme}
      variant={variant}
      icon={!!icon}
      elevated={elevated}
    >
      <div>{childNodes}</div>
      <Ripple disabled={disabled} />
    </ButtonContainer>
  );
};

export default memo(Button);
