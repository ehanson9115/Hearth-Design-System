import React from 'react';

export interface BottomNavItem {
  label: React.ReactNode;
  /** Tabler icon class, e.g. "ti-home". */
  icon: string;
  active?: boolean;
  /** Notification count bubble. */
  badge?: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export interface MobileBottomNavProps extends React.HTMLAttributes<HTMLElement> {
  items?: BottomNavItem[];
}

/**
 * Hearth mobile bottom navigation bar.
 */
export function MobileBottomNav(props: MobileBottomNavProps): JSX.Element;
