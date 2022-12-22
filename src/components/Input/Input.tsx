import { IInputStaticProps } from './StyledInput';
import { StyledInput } from './StyledInput';
export interface IInputProps extends IInputStaticProps {
  onChange?: (...args: unknown[]) => unknown | typeof jest;
  onBlur?: (...args: unknown[]) => unknown | typeof jest;
  onFocus?: (...args: unknown[]) => unknown | typeof jest;
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
}: IInputProps): JSX.Element => (
  <StyledInput
    name={name}
    type={type}
    style={style}
    className={className}
    onChange={onChange}
    onBlur={onBlur}
    placeholder={placeholder}
    value={value}
    onFocus={onFocus}
    required={required}
    autoComplete={type === 'password' ? 'on' : 'off'}
  />
);

export default Input;
