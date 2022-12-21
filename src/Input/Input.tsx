import { IBaseProps, InputElementType } from '../../../types/props';
import './input.scss';

export interface IInputProps extends IBaseProps {
  type?: InputElementType;
  onChange?: (...args) => any | typeof jest; //eslint-disable-line @typescript-eslint/no-explicit-any
  placeholder?: string;
  fullwidth?: boolean;
  value?: string | number;
  defaultValue?: string | number;
  name?: string;
  required?: boolean;
  onBlur?: (...args) => any | typeof jest; //eslint-disable-line @typescript-eslint/no-explicit-any
  onFocus?: (...args) => any | typeof jest; //eslint-disable-line @typescript-eslint/no-explicit-any
}

const Input = ({
  type = 'text',
  className,
  style = {},
  onChange,
  placeholder,
  fullwidth = false,
  value,
  name,
  required,
  onBlur,
  onFocus,
}: IInputProps): JSX.Element => {
  const classList = ['input'];
  if (className) {
    className.split(' ').forEach((className) => classList.push(className));
  }

  if (fullwidth) classList.push('fullwidth');

  return (
    <input
      name={name}
      type={type}
      style={style}
      className={classList.join(' ')}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      value={value}
      onFocus={onFocus}
      required={required}
      autoComplete={type === 'password' ? 'on' : 'off'}
    />
  );
};

export default Input;
