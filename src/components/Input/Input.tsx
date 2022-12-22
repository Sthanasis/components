import { IBaseProps, InputElementType } from 'src/types/props';
import { StyledInput } from './StyledInput';
export interface IInputProps extends IBaseProps {
  type?: InputElementType;
  placeholder?: string;
  value?: string | number;
  defaultValue?: string | number;
  fullwidth?: boolean;
  name?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | typeof jest;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void | typeof jest;
  onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void | typeof jest;
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
