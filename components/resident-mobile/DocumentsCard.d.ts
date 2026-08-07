import React from 'react';

export interface DocumentRow {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Tabler icon class; defaults by `missing`. */
  icon?: string;
  /** Outstanding item — amber-tint circle instead of grey. */
  missing?: boolean;
}

export interface DocumentsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode;
  /** Amber dot badge copy, e.g. "3 missing". */
  badge?: React.ReactNode;
  subtitle?: React.ReactNode;
  docs?: DocumentRow[];
  /** Full-width CTA label. `null` hides the button. */
  cta?: React.ReactNode;
  ctaIcon?: string;
  onCta?: () => void;
}

/** Hearth resident documents card (doc list + full-width upload CTA). */
export function DocumentsCard(props: DocumentsCardProps): JSX.Element;
