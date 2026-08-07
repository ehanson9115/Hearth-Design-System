import React from 'react';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of pulsing lines. */
  rows?: number;
  /** Optional explicit widths per row, e.g. ['100%','82%','64%']. */
  widths?: string[];
}

/** Hearth skeleton loader — staggered pulsing lines. */
export function Skeleton(props: SkeletonProps): JSX.Element;
