import { IBaseProps } from 'src/types/props';

export type ColumnType = {
  field: string | 'id';
  name: string;
};

export type RowType = {
  [key: string | 'id']: string | number | undefined | null;
};
export interface IStyledDataCellProps {
  withBorder: boolean;
  width?: number | string;
  height?: number | string;
}
export interface ICellProps extends IBaseProps {
  value: string | number | undefined | null;
  field: string;
  withBorder?: boolean;
  width?: number | string;
  height?: number | string;
}

export type SortDirectionType = 'asc' | 'desc' | 'default';
