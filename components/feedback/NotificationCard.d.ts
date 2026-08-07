import React from 'react';

export type NotificationVariant = 'info' | 'success' | 'warning' | 'danger';

/**
 * Hearth inline notification / alert card.
 */
export interface NotificationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: NotificationVariant;
  /** Bold headline (15px / 500). */
  title?: React.ReactNode;
  /** Supporting body copy (softened toward grey). */
  children?: React.ReactNode;
  /** Override the default per-variant Tabler icon class. */
  icon?: string;
  /** Denser padding + soft tints — for admin/data screens. */
  compact?: boolean;
}

export function NotificationCard(props: NotificationCardProps): JSX.Element;
