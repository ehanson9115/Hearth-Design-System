import React from 'react';

export interface ActionSheetAction {
  label: React.ReactNode;
  /** Renders in AA red for remove/delete choices. */
  destructive?: boolean;
  onClick?: () => void;
}

/**
 * Hearth OS-style action sheet.
 */
export interface ActionSheetProps extends React.HTMLAttributes<HTMLDivElement> {
  actions?: ActionSheetAction[];
  /** Set to null/'' to hide the Cancel group. */
  cancelLabel?: React.ReactNode;
  onCancel?: () => void;
}

export function ActionSheet(props: ActionSheetProps): JSX.Element;
