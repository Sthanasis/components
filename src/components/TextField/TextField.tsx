import React, { useState, memo, useEffect } from 'react';
import Input from 'src/components/Input';
import { isEmpty } from 'src/utilities/utils';

import { StyledTextField } from './StyledTextField';
import Label from '../Label';
import Icon from '../Icon';
import { ITextFieldProps } from 'src/types';

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
  iconStart,
  iconEnd,
  onBlur,
  onFocus,
  'aria-label': ariaLabel,
  type,
  name,
  defaultValue,
  ...rest
}: ITextFieldProps): JSX.Element => {
  const labelText = label || placeholder;

  const styles = { ...style };

  const [currentValue, setCurrentValue] = useState<string | number>(value);
  const [hasError, setHasError] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const hasValue = currentValue && currentValue.toString().trim() !== '';

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
    if (onBlur) onBlur(e);
    setHasFocus(false);
  };

  const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasFocus(true);
    if (onFocus) onFocus(e);
  };

  useEffect(() => {
    if (validate) {
      if (!isEmpty(currentValue)) {
        if (!validate(currentValue)) setHasError(true);
        else setHasError(false);
      }
    }
  }, [currentValue]);

  return (
    <StyledTextField
      style={styles}
      className={className}
      aria-label={ariaLabel}
      fullwidth={fullwidth}
      contrast={contrast}
      variant={variant}
      hasError={hasError}
      color={color}
      hasFocus={hasFocus}
      {...rest}
    >
      <Label
        withIcon={!!iconStart}
        labelText={labelText}
        hasValue={!!hasValue}
        hasFocus={hasFocus}
        hasError={hasError}
        variant={variant}
        color={color}
      />
      {iconStart && <Icon icon={iconStart} />}
      <Input
        type={type}
        name={name}
        defaultValue={defaultValue}
        value={currentValue}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        fullwidth
        required={required}
      />
      {iconEnd && <Icon icon={iconEnd} />}
    </StyledTextField>
  );
};

export default memo(TextField);
