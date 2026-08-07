import React from 'react';

export interface AnnouncementBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Leading Tabler icon class. */
  icon?: string;
  children?: React.ReactNode;
  /** Action button label (omit for no button). */
  action?: React.ReactNode;
  onAction?: () => void;
  /** Provide to render a dismiss ✕. */
  onDismiss?: () => void;
}

/** Hearth announcement bar — promo/announce only, violet tint. */
export function AnnouncementBar(props: AnnouncementBarProps): JSX.Element;
