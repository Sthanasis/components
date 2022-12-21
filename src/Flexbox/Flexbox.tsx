import { CSSProperties } from 'react';

import { IBaseProps } from '../../../types/props';

export type FlexAlignmentType =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around';

export type FlexJustifyType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around';
interface IFlexboxProps extends IBaseProps {
  children: React.ReactNode;
  alignment?: FlexAlignmentType;
  row?: boolean;
  textAlign?: 'center' | 'left' | 'right';
  wrap?: 'wrap' | 'nowrap';
  justify?: FlexJustifyType;
  flex?: number;
}

const Flexbox = ({
  children,
  alignment = 'center',
  justify = 'center',
  wrap,
  textAlign = 'center',
  style = {},
  flex,
  row,
  className,
  ...props
}: IFlexboxProps): JSX.Element => {
  const direction = row ? 'row' : 'column';
  const defaultWrap = wrap || row ? 'wrap' : 'nowrap';

  const styles: CSSProperties = {
    ...style,
    display: 'flex',
    flexDirection: direction,
    flexWrap: defaultWrap,
    justifyContent: style.justifyContent || justify,
    alignItems: style.alignItems || alignment,
    boxSizing: 'border-box',
    textAlign,
    flex,
  };

  return (
    <div {...props} className={className} style={styles}>
      {children}
    </div>
  );
};

export default Flexbox;
