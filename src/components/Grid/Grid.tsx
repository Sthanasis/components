import { CSSProperties } from 'react';
import { IBaseProps } from 'src/types';

interface IGridProps extends IBaseProps {
  children: React.ReactNode;
  container?: boolean;
  rows?: number;
  columns?: number;
  gap?: number | string;
}

const Grid = ({
  children,
  container,
  rows = 1,
  columns = 1,
  gap = '15px',
  style = {},
  className,
}: IGridProps): JSX.Element => {
  if (!container) {
    return <>{children}</>;
  }

  const classes = ['grid'];

  if (className) {
    classes.push(className);
  }

  const styles: CSSProperties = {
    gridTemplateColumns: `repeat(${columns}, ${rows}fr)`,
    gap: gap,
    ...style,
  };

  return (
    <div style={styles} className={className}>
      {children}
    </div>
  );
};

export default Grid;
