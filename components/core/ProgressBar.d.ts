import React from 'react';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Fill percentage 0–100. */
  value?: number;
  /** Current step (renders "Step N of M" caption). */
  step?: number;
  of?: number;
  /** Trailing caption after the step label. */
  label?: React.ReactNode;
  fullWidth?: boolean;
}

/** Hearth progress bar with optional step caption. */
export function ProgressBar(props: ProgressBarProps): JSX.Element;
