import React from 'react';

/**
 * Hearth uppercase section label.
 */
export interface EyebrowProps extends React.HTMLAttributes<HTMLElement> {
  /** `page` (13px, above page/section titles) or `card` (10.5px, inside a card). */
  level?: 'page' | 'card';
  /** Rendered element, default `div`. */
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

export function Eyebrow(props: EyebrowProps): JSX.Element;
