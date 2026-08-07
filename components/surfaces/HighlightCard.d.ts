import React from 'react';

export interface HighlightItem {
  label: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export interface HighlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode;
  /** Leading Tabler icon class for the title. */
  icon?: string;
  items?: HighlightItem[];
  /** Custom rows instead of `items`. */
  children?: React.ReactNode;
}

/** Hearth "What's new" highlight card (violet-stroke promo panel). */
export function HighlightCard(props: HighlightCardProps): JSX.Element;
