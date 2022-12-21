import { MouseEvent, ReactNode, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useTheme } from 'styled-components';
import { IBaseProps } from '../../types/props';
import { ButtonContainer } from './StyledButton';
import Ripple from '../Rippler/Ripple';
import type { VariantType, ButtonType } from '../../types/types';
export interface IButtonProps extends IBaseProps {
  children?: React.ReactNode | React.ReactNode[];
  buttonType?: ButtonType;
  variant?: VariantType;
  elevated?: boolean;
  onClick?: (...args: unknown[]) => unknown;
  fullwidth?: boolean;
  contrast?: boolean;
  disabled?: boolean;
  iconStart?: IconProp;
  iconEnd?: IconProp;
  icon?: IconProp;
  showOnlyIcons?: boolean;
  disableTheme?: boolean;
}

const Button = ({
  style,
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
  showOnlyIcons,
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
  } else if (showOnlyIcons) {
    childNodes = (
      <>
        {iconStart && (
          <FontAwesomeIcon className="icon icon-start" icon={iconStart} />
        )}
        {iconEnd && (
          <FontAwesomeIcon className="icon icon-end" icon={iconEnd} />
        )}
      </>
    );
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
