import React from 'react';

export interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The headline number/value. */
  value: React.ReactNode;
  label?: React.ReactNode;
  /** Trend delta shown next to the value, e.g. 4. */
  trend?: React.ReactNode;
  trendDir?: 'up' | 'down';
  /** `warn` tints the number for attention (e.g. items waiting). */
  variant?: 'default' | 'warn';
}

/**
 * Hearth metric / stat card.
 */
export function MetricCard(props: MetricCardProps): JSX.Element;
