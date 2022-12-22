import React, { useState, memo, ReactNode, useEffect } from 'react';
import { useTheme } from 'styled-components';
import Label from '../Label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Input from 'src/components/Input';
import { IInputProps } from 'src/components/Input/Input';
import { isEmpty } from 'src/utilities/utils';
import Button from 'src/components/Button';
import { IBaseProps } from 'src/types/props';
import { FlexAlignmentType } from 'src/components/Flexbox/Flexbox';
import { StyledTextField } from './StyledTextField';
export type TextfieldVariant = 'outlined' | 'filled' | 'default';

export interface ITextFieldProps extends IInputProps {
  label?: string;
  variant?: TextfieldVariant;
  contrast?: boolean;
  color?: 'primary';
  validate?: (value: unknown) => boolean;
  icon?: IconProp;
}

interface IWrapperProps extends IBaseProps {
  alignment: FlexAlignmentType;
  children: ReactNode;
  ariaLabel?: string;
}

const TextField = ({
  label,
  placeholder,
  variant = 'outlined',
  value = '',
  onChange,
  style = {},
  fullwidth = false,
  contrast = false,
  color = 'primary',
  className,
  required,
  validate,
  icon,
  'aria-label': ariaLabel,
  ...props
}: ITextFieldProps): JSX.Element => {
  const theme = useTheme();
  const labelText = label || placeholder;

  const styles = { ...style };

  const [currentValue, setCurrentValue] =
    useState<string | number | undefined>(value);
  const [hasError, setHasError] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const hasValue = currentValue && currentValue.toString().trim() !== '';

  // if (fullwidth) {
  //   classList.push('fullwidth');
  // }

  // if (className) {
  //   classList.push(className);
  // }

  // if (contrast) {
  //   classList.push('contrast');
  // }
  // if (hasError) {
  //   classList.push('error');
  // }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.target.value);
    if (onChange) onChange(e);
  };
  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (validate) {
      if (!validate(value)) setHasError(true);
      else setHasError(false);
    } else {
      if (required) {
        if (isEmpty(e.target.value)) setHasError(true);
        else setHasError(false);
      }
    }
    setHasFocus(false);
  };

  useEffect(() => {
    if (validate) {
      if (!isEmpty(value)) {
        if (!validate(value)) setHasError(true);
        else setHasError(false);
      }
    }
  }, []);

  // if (props.type === 'submit') {
  //   return (
  //     <Wrapper style={styles} alignment="flex-start" ariaLabel={ariaLabel}>
  //       <Button
  //         type={props.type}
  //         fullwidth
  //         contrast
  //         testId={props.testId}
  //       >
  //         {label}
  //       </Button>
  //     </Wrapper>
  //   );
  // }

  return (
    <StyledTextField
      style={styles}
      className={className}
      aria-label={ariaLabel}
      fullwidth={fullwidth}
      contrast={contrast}
      variant={variant}
      theme={theme}
      hasError={hasError}
      color={color}
      hasFocus={hasFocus}
    >
      <Label
        labelText={labelText}
        hasValue={!!hasValue}
        hasFocus={hasFocus}
        hasError={hasError}
        variant={variant}
        color={color}
      />
      <Input
        {...props}
        value={currentValue}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={() => setHasFocus(true)}
        fullwidth
        required={required}
      />
      {icon && <FontAwesomeIcon icon={icon} className="icon" />}
    </StyledTextField>
  );
};

export default memo(TextField);
