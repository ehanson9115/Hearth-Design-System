import React from 'react';

export type BadgeVariant =
  | 'success' | 'warning' | 'danger' | 'info'  // status — dot pills
  | 'brand' | 'neutral' | 'outline';           // tags — plain pills

/**
 * Hearth status badge / tag pill.
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Status variants (success/warning/danger/info) render a vivid dot and
   *  a tinted, outlined pill. Tag variants (brand/neutral/outline) are plain. */
  variant?: BadgeVariant;
  /** Force the leading dot on/off. Defaults on for status variants. */
  dot?: boolean;
  /** Compact 4px inline chip (tinted fill + AA text, no dot) — for
   *  confidence/inline status labels like "OCR: High confidence". */
  chip?: boolean;
  /** Lead with a drawn check instead of the dot — positive confirmations. */
  check?: boolean;
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
