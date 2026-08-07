import React from 'react';

export interface ActivityItem {
  label: React.ReactNode;
  /** Checked state — green fill + white tick. */
  done?: boolean;
  /** Optional right-aligned value (hours, count). */
  value?: React.ReactNode;
}

export interface ActivityCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional Tabler icon class — renders a 36px grey circle in the header. */
  icon?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  items?: ActivityItem[];
  /** Row click handler — makes rows interactive. */
  onToggle?: (index: number, item: ActivityItem) => void;
  /** Custom rows instead of `items`. */
  children?: React.ReactNode;
}

/** Hearth resident reported-activity checklist card. */
export function ActivityCard(props: ActivityCardProps): JSX.Element;
