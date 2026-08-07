import React from 'react';

export interface ReviewItem {
  label: React.ReactNode;
  value: React.ReactNode;
  /** Renders the value in danger text ("Not added yet"). */
  missing?: boolean;
}

export interface ReviewTileProps extends React.HTMLAttributes<HTMLDivElement> {
  title: React.ReactNode;
  editHref?: string;
  onEdit?: () => void;
  items?: ReviewItem[];
  children?: React.ReactNode;
}

/** Hearth "review your answers" tile — header + colon-format key/value rows. */
export function ReviewTile(props: ReviewTileProps): JSX.Element;
