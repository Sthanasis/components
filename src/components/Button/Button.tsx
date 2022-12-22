import { MouseEvent, ReactNode, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useTheme } from 'styled-components';
import { IBaseProps } from 'src/types/props';
import { ButtonContainer } from './StyledButton';
import Ripple from 'src/components/Ripple';
import type { ThemeVariantType, ButtonType } from 'src/types/types';

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
      {iconStart && (
        <FontAwesomeIcon className="icon icon-start" icon={iconStart} />
      )}
      {children}
      {iconEnd && <FontAwesomeIcon className="icon icon-end" icon={iconEnd} />}
    </>
  );

  if (icon) {
    childNodes = <FontAwesomeIcon icon={icon} />;
  }

  return (
    <ButtonContainer
      className={className}
      onClick={click}
      disabled={disabled}
      data-testid={testId}
      buttonType={buttonType}
      theme={theme}
      variant={variant}
      elevated={elevated}
    >
      <div className="content">{childNodes}</div>
      <Ripple disabled={disabled} />
    </ButtonContainer>
  );
};

export default memo(Button);
