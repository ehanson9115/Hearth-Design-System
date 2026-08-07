import React from 'react';

export interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode;
  /** Subtitle line. */
  children?: React.ReactNode;
}

/**
 * Hearth gradient hero / welcome block.
 */
export function Hero(props: HeroProps): JSX.Element;
