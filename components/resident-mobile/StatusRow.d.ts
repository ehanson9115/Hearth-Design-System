import React from 'react';

/**
 * Hearth status list row (icon tile + title/date + trailing badge).
 */
export interface StatusRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tabler icon class, e.g. `ti-calendar-check`. */
  icon?: string;
  title: React.ReactNode;
  /** Quiet second line — usually a date ("Completed Apr 28, 2026"). */
  subtitle?: React.ReactNode;
  /** Trailing status node — usually `<Badge variant="success">Complete</Badge>`. */
  badge?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function StatusRow(props: StatusRowProps): JSX.Element;
