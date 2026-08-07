import React from 'react';

export interface ProgramStatusCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Stroke + icon-tint tone. `amber` (default) = in review / action pending. */
  tone?: 'amber' | 'neutral' | 'success';
  /** Tabler icon class; defaults per tone. */
  icon?: string;
  title?: React.ReactNode;
  /** Description / meta copy below the hairline. */
  children?: React.ReactNode;
}

/** Hearth resident status card (amber-stroke application-status card). */
export function ProgramStatusCard(props: ProgramStatusCardProps): JSX.Element;
