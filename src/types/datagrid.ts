import { CSSProperties } from 'react';
import { IBaseProps } from 'src/types';
import { ThemeType } from 'src/utilities/theme';
import { DensityMapType, DensityType } from './types';

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
interface IStyledCellProps {
  width?: number | string;
  height?: number | string;
  theme: ThemeType;
}
export interface IStyledDataCellProps extends IStyledCellProps {
  withBorder: boolean;
}
export interface IStyledHeaderCellProps extends IStyledCellProps {
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
/**
 * The column object with index as keys
 * Example {0: {field: 'id', name: 'id', width: 100}}
 * This helps in sorting each row property according to the columns
 * and extracts the width of each cell.
 * ======
 * This object helps in sorting each row property
 * according to the columns. Works as a faster way to access each cell property
 * since we don't have to loop over the columns again.
 * Render the rows based on this object
 */
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

export interface IDataGridProps extends IBaseProps {
  rows: RowType[];
  columns: ColumnType[];
  height?: number;
  width?: CSSProperties['width'];
  virtual?: boolean;
  loading?: boolean;
  pagination?: IPaginationOptions;
  density?: DensityType;
  densityOptions?: DensityMapType;
}
