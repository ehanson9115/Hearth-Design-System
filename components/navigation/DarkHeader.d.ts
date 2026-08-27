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
  /** Brand mark node. Defaults to `HTMark`, the Healthy Together product
   *  icon. Pass another brand's mark here; it replaces the violet chip, so it
   *  should carry its own ground. */
  logo?: React.ReactNode;
  /** Tabler glyph instead of a mark — renders on the solid-violet chip.
   *  Takes precedence over `logo` when set. */
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

/** The Healthy Together product mark, inline SVG. Default `logo` for DarkHeader. */
export function HTMark(props: { size?: number }): JSX.Element;
