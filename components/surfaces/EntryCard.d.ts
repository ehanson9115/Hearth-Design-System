import React from 'react';

/**
 * Hearth violet-tint entry-point card.
 */
export interface EntryCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Tabler icon class, e.g. `ti-calendar-repeat`. */
  icon?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Renders as an anchor when set. */
  href?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export function EntryCard(props: EntryCardProps): JSX.Element;
