export interface IBaseProps {
  'test-id'?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
}

export type InputElementType =
  | 'text'
  | 'email'
  | 'radio'
  | 'number'
  | 'password'
  | 'submit';
