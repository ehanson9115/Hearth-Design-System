import React from 'react';

export interface ActivityItem {
  name: string;
  /** Event text after the em dash. */
  text?: React.ReactNode;
  when?: React.ReactNode;
  /** Optional trailing node, typically a <Badge>. */
  badge?: React.ReactNode;
}

export interface ActivityListProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: ActivityItem[];
  children?: React.ReactNode;
}

/** Hearth activity feed — avatar + event + timestamp rows. */
export function ActivityList(props: ActivityListProps): JSX.Element;
