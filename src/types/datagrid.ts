import { CSSProperties } from 'react';
import { IBaseProps } from 'src/types';
import { ThemeType } from 'src/utilities/theme';

export type SortDirectionType = 'asc' | 'desc' | 'default';

export type ColumnType = {
  field: string | 'id';
  name: string;
  width?: number;
  hideColumn?: boolean;
  orderBy?: SortDirectionType;
};

export type RowType = {
  [key: string | 'id']: string | number | undefined | null;
};
export interface IStyledDataCellProps {
  withBorder: boolean;
  width?: number | string;
  height?: number | string;
  theme: ThemeType;
}
export interface IStyledHeaderCellProps extends IStyledDataCellProps {
  grabed: boolean;
}

export interface ICellProps extends IBaseProps {
  value: string | number | undefined | null;
  field: string;
  withBorder?: boolean;
  width?: number | string;
  height?: number | string;
}
export interface IHeaderCellProps extends ICellProps {
  index: number;
}

export type ColumnObjectType = { [key: number]: ColumnType };
export interface IPaginationOptions {
  page: number;
  total: number;
  pageSize: number;
  rowsPerPageOptions: number[];
  onPageChange?: (arg: number) => void;
  onRowsPerPageChange?: (arg: number) => void;
}
export interface ISortMessageEventData {
  rows: RowType[];
  direction: SortDirectionType;
  field: string;
  columnObject?: ColumnObjectType;
  pagination?: {
    page: IPaginationOptions['page'];
    pageSize: IPaginationOptions['pageSize'];
    total: IPaginationOptions['total'];
  };
}

export interface IDataGridProps {
  rows: RowType[];
  columns: ColumnType[];
  height?: number;
  width?: CSSProperties['width'];
  virtual?: boolean;
  loading?: boolean;
  pagination?: IPaginationOptions;
}
