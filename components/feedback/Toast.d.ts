import React from 'react';

/**
 * Hearth ink-surface confirmation toast.
 */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Show the leading green check (default true). */
  check?: boolean;
  children?: React.ReactNode;
}

export function Toast(props: ToastProps): JSX.Element;
