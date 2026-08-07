import React from 'react';

/**
 * Hearth mobile bottom sheet (decision surface).
 */
export interface BottomSheetProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode;
  /** Body copy — keep it to what the decision needs. */
  children?: React.ReactNode;
  /** Stacked action nodes: primary `Button` first, quiet dismiss under it. */
  actions?: React.ReactNode;
  /** Show the grab handle (default true). */
  handle?: boolean;
}

export function BottomSheet(props: BottomSheetProps): JSX.Element;
