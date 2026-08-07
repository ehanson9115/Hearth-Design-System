/* @kit none — intentional addition, confirmed 2026-08-03. The caseworker suite
   needs persistent desktop nav. Rationale: readme.md → "Intentional additions". */
import React from 'react';

export interface SideNavItem {
  /** Tabler icon class, e.g. "ti-layout-dashboard". */
  icon?: string;
  label: React.ReactNode;
  /** Trailing count or time, e.g. "8" or "1:44p". */
  meta?: React.ReactNode;
  /** One active row per rail. */
  active?: boolean;
  href?: string;
  onClick?: () => void;
}

export interface SideNavGroup {
  /** Section label — rendered uppercase, 11px/500. */
  label?: React.ReactNode;
  items: SideNavItem[];
}

export interface SideNavProps extends React.HTMLAttributes<HTMLElement> {
  groups: SideNavGroup[];
  /** Rail width. Default 220. */
  width?: number | string;
  /** Slot below the groups — typically a HighlightCard. Children render here too. */
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

/** Hearth admin side navigation rail. */
export function SideNav(props: SideNavProps): JSX.Element;
