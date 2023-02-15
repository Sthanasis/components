import { IInputProps } from 'src/types';
import { StyledInput } from './StyledInput';

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
}: IInputProps): JSX.Element => (
  <StyledInput
    name={name}
    type={type}
    style={style}
    className={className}
    onChange={onChange}
    fullwidth={fullwidth}
    onBlur={onBlur}
    placeholder={placeholder}
    value={value}
    onFocus={onFocus}
    required={required}
    autoComplete={type === 'password' ? 'on' : 'off'}
  />
);

export default Input;
