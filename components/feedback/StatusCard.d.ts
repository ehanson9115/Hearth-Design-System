import React from 'react';

export type StatusVariant = 'success' | 'loading' | 'empty' | 'error';

export interface StatusCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: StatusVariant;
  /** Override the default per-variant Tabler icon (ignored for loading). */
  icon?: string;
  title?: React.ReactNode;
  /** Invitation / reassurance body copy. */
  children?: React.ReactNode;
  /** Optional action, typically a <Button>. Rendered full-width — the card
   *  passes `fullWidth` down unless the element already sets it. */
  action?: React.ReactNode;
}

/**
 * Hearth centered state card (success / loading / empty / error).
 */
export function StatusCard(props: StatusCardProps): JSX.Element;
