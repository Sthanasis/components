import Flexbox from '../../ui/Flexbox';
import Input from '../../ui/Input';
import { IInputProps } from '../../ui/Input/Input';
import './textField.scss';
import { useTheme } from '../../../context/theme';
import React, { useState, memo, ReactNode, useEffect } from 'react';
import { isEmpty } from 'src/utilities/utils';
import Button from 'src/components/ui/Button';
import { IBaseProps } from '../../../types/props';
import { FlexAlignmentType } from 'src/components/ui/Flexbox/Flexbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface ITextFieldProps extends IInputProps {
  label?: string;
  variant?: 'outlined' | 'filled' | 'default';
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
const Wrapper = ({
  className,
  children,
  alignment,
  style,
  ariaLabel,
}: IWrapperProps): JSX.Element => (
  <Flexbox
    aria-label={ariaLabel}
    alignment={alignment}
    className={className}
    style={style}
  >
    {children}
  </Flexbox>
);

const Label = ({
  labelText,
  labelClassList,
  textClassList,
}: {
  labelText?: string;
  labelClassList: string;
  textClassList: string;
}) =>
  labelText && (
    <div className={labelClassList}>
      <label className={textClassList}>{labelText}</label>
    </div>
  );

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
  const { theme } = useTheme();
  const classList = ['textfield', theme, variant, color];
  const labelText = label || placeholder;
  const textClassList: string[] = [theme];
  const labelClassList: string[] = ['label'];
  const styles = { ...style };

  const [currentValue, setCurrentValue] = useState<string | number | undefined>(
    value
  );
  const [hasError, setHasError] = useState(false);

  const hasValue = currentValue && currentValue.toString().trim() !== '';

  if (hasValue) {
    labelClassList.push('hasValue');
  }

  if (fullwidth) {
    classList.push('fullwidth');
  }

  if (className) {
    classList.push(className);
  }

  if (contrast) {
    classList.push('contrast');
  }
  if (hasError) {
    classList.push('error');
  }

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
  };

  useEffect(() => {
    if (validate) {
      if (!isEmpty(value)) {
        if (!validate(value)) setHasError(true);
        else setHasError(false);
      }
    }
  }, []);

  if (props.type === 'submit') {
    return (
      <Wrapper style={styles} alignment="flex-start" ariaLabel={ariaLabel}>
        <Button
          type={props.type}
          fullwidth
          className={labelClassList.join(' ')}
          contrast
          testId={props.testId}
        >
          {label}
        </Button>
      </Wrapper>
    );
  }

  return (
    <Wrapper
      style={styles}
      className={classList.join(' ')}
      ariaLabel={ariaLabel}
      alignment="flex-start"
    >
      <Label
        labelText={labelText}
        labelClassList={labelClassList.join(' ')}
        textClassList={textClassList.join(' ')}
      />
      <Input
        {...props}
        value={currentValue}
        onChange={handleChange}
        onBlur={handleBlur}
        fullwidth
        required={required}
      />
      {icon && <FontAwesomeIcon icon={icon} className="icon" />}
    </Wrapper>
  );
};

export default memo(TextField);
