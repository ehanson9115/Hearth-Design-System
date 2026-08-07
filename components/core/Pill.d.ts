import React from 'react';

export interface PillProps extends React.HTMLAttributes<HTMLElement> {
  active?: boolean;
  /** Render as 'button' (default) or 'a'. */
  as?: 'button' | 'a';
  children?: React.ReactNode;
}

/** Hearth tab/filter pill — compose in a row, one active. */
export function Pill(props: PillProps): JSX.Element;
