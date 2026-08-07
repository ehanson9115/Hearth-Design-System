import React from 'react';

/**
 * Hearth transaction list row (purchase / deposit).
 */
export interface TransactionRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tabler icon class, e.g. `ti-shopping-cart`. */
  icon?: string;
  title: React.ReactNode;
  /** Quiet second line — time, item count. */
  meta?: React.ReactNode;
  amount: React.ReactNode;
  /** Colors the status word: green settled / amber pending. */
  status?: 'settled' | 'pending';
  /** Override the status word (defaults to "Settled"/"Pending"). */
  statusLabel?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function TransactionRow(props: TransactionRowProps): JSX.Element;
