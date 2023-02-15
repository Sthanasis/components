import type { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import type { ReactNode, MouseEvent, ChangeEvent } from 'react';
import type {
  ButtonType,
  IconAlignType,
  InputElementType,
  TextfieldVariant,
  TextTagType,
  TextVariantType,
  ThemeVariantType,
} from './types';

export interface IBaseProps {
  'test-id'?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
}

export interface IBackdropProps extends IBaseProps {
  opacity?: string | number;
  children?: ReactNode;
  onClose: () => void | Promise<void>;
}
export interface IButtonProps extends IBaseProps {
  children?: React.ReactNode | React.ReactNode[];
  variant?: ButtonType;
  color?: ThemeVariantType;
  elevated?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  fullwidth?: boolean;
  contrast?: boolean;
  disabled?: boolean;
  iconStart?: IconProp;
  iconEnd?: IconProp;
  icon?: IconProp;
  rounded?: boolean;
}

export interface IIconProps extends IBaseProps {
  icon: IconProp;
  align?: IconAlignType;
  size?: SizeProp;
}

export interface IInputProps extends IBaseProps {
  type?: InputElementType;
  placeholder?: string;
  value?: string | number;
  defaultValue?: string | number;
  fullwidth?: boolean;
  name?: string;
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void | typeof jest;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void | typeof jest;
  onFocus?: (e: ChangeEvent<HTMLInputElement>) => void | typeof jest;
}

export interface ILabelProps {
  labelText?: string;
  hasValue: boolean;
  hasFocus: boolean;
  hasError?: boolean;
  variant?: TextfieldVariant;
  color?: ThemeVariantType;
  withIcon?: boolean;
}
export interface IMenuItemProps extends IBaseProps {
  selected?: boolean;
  children?: ReactNode;
  value: string | number;
}

export interface IPopoverProps extends IBaseProps {
  onClose: () => void;
  anchorEl?: HTMLButtonElement | null;
  children: ReactNode;
  visible: boolean;
  handleClick?: (e: MouseEvent<HTMLDivElement>) => void;
}
export interface IPopoverMenuProps {
  label?: string;
  children: ReactNode;
  onChange?: (v: string) => void;
}
export interface IProgressProps {
  type?: 'spinner' | 'linear';
  color?: ThemeVariantType;
}

export interface IRippleProps {
  duration?: number;
  color?: string;
  disabled?: boolean;
}

export interface ISearchProps extends IBaseProps {
  searchValue?: string;
  onSearch: (v: string) => void;
  placeholder?: string;
  variant?: TextfieldVariant;
  color?: ThemeVariantType;
}

export interface ITextProps extends IBaseProps {
  children: React.ReactNode;
  tag?: TextTagType;
  variant?: TextVariantType;
}

export interface ITextFieldProps extends IInputProps {
  label?: string;
  variant?: TextfieldVariant;
  contrast?: boolean;
  color?: ThemeVariantType;
  validate?: (value: unknown) => boolean;
  iconStart?: IconProp;
  iconEnd?: IconProp;
}
