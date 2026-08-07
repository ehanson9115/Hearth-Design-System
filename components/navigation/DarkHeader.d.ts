import React from 'react';

export interface DarkNavItem {
  label: React.ReactNode;
  active?: boolean;
  href?: string;
  onClick?: () => void;
}

export interface DarkHeaderProps extends React.HTMLAttributes<HTMLElement> {
  name?: React.ReactNode;
  /** Role label after the product name, e.g. "Caseworker". */
  role?: React.ReactNode;
  /** Logo chip Tabler icon (the brand mark; no logo file exists). */
  logoIcon?: string;
  nav?: DarkNavItem[];
  /** Ghost action button label (right-aligned). */
  action?: React.ReactNode;
  onAction?: () => void;
  /** Rounded corners for embedded use (default is a full-width bar). */
  rounded?: boolean;
  children?: React.ReactNode;
}

/**
 * Hearth admin dark header (violet ink band).
 */
export function DarkHeader(props: DarkHeaderProps): JSX.Element;
