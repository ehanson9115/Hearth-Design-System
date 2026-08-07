import React from 'react';

export interface DataColumn<Row = any> {
  key: string;
  header: React.ReactNode;
  align?: 'left' | 'right';
  /** Explicit column width (px number or CSS length/percentage). Overrides the
   *  default sizing — the first column is otherwise the widest at 34%/180px min. */
  width?: number | string;
  /** Custom cell renderer; defaults to row[key]. */
  render?: (row: Row) => React.ReactNode;
}

export interface DataTableProps<Row = any> extends React.TableHTMLAttributes<HTMLTableElement> {
  columns: DataColumn<Row>[];
  rows: Row[];
  /** Field to use as React key. */
  rowKey?: string;
}

/**
 * Hearth data table. The first column is the identity column and is always the
 * widest (34%, 180px floor) unless a column sets an explicit `width`.
 */
export function DataTable(props: DataTableProps): JSX.Element & {
  Name: React.FC<{ children: React.ReactNode; sub?: React.ReactNode }>;
};

/** Stacked name + muted sub-id for a table cell. Also available as DataTable.Name. */
export function DataTableName(props: { children: React.ReactNode; sub?: React.ReactNode }): JSX.Element;
