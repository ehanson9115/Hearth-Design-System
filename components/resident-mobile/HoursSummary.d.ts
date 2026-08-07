import React from 'react';

export interface HoursSummaryProps extends React.HTMLAttributes<HTMLElement> {
  /** Section heading. Defaults to "How your hours add up:". */
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Right-aligned running total, e.g. "18 of 20 hrs". */
  total?: React.ReactNode;
  /** Header toggles the body open/closed. Default true. */
  collapsible?: boolean;
  defaultOpen?: boolean;
  /** Nested ActivityCards. */
  children?: React.ReactNode;
}

/** Hearth resident hours-summary expandable section. */
export function HoursSummary(props: HoursSummaryProps): JSX.Element;
