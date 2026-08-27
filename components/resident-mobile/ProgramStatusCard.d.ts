import React from 'react';

export interface ProgramStatusCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Wash + stroke + icon-tint tone. `warning` (default) = in review / action
   *  pending; `neutral` = a dated obligation with no alarm; `success` =
   *  approved; `danger` = denied or expired. `'amber'` is the old name for
   *  `warning`, still accepted. */
  tone?: 'warning' | 'neutral' | 'success' | 'danger' | 'amber';
  /** Tabler icon class; defaults per tone. */
  icon?: string;
  title?: React.ReactNode;
  /** Description / meta copy below the hairline. */
  children?: React.ReactNode;
}

/** Hearth resident status card — status wash + matching stroke. */
export function ProgramStatusCard(props: ProgramStatusCardProps): JSX.Element;
