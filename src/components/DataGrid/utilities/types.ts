import { CSSProperties } from 'react';
import { IBaseProps } from 'src/types/props';
import { ThemeType } from 'src/utilities/theme';

export type ColumnType = {
  field: string | 'id';
  name: string;
  width?: number;
};

export type RowType = {
  [key: string | 'id']: string | number | undefined | null;
  width?: number;
};
export interface IStyledDataCellProps {
  withBorder: boolean;
  width?: number | string;
  height?: number | string;
  theme: ThemeType;
}
export interface ICellProps extends IBaseProps {
  value: string | number | undefined | null;
  field: string;
  withBorder?: boolean;
  width?: number | string;
  height?: number | string;
}
export interface IDataGridProps {
  rows?: RowType[];
  columns?: ColumnType[];
  height?: number;
  width?: CSSProperties['width'];
}
export type SortDirectionType = 'asc' | 'desc' | 'default';
