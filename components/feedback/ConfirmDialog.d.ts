import React from 'react';

export type ConfirmTone = 'danger' | 'warning' | 'default';

export interface ConfirmDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  /** `danger` (default) uses the red icon tint and a danger confirm button. */
  tone?: ConfirmTone;
  /** Override the per-tone Tabler icon. */
  icon?: string;
  title?: React.ReactNode;
  /** What will happen, and whether it can be undone. */
  children?: React.ReactNode;
  confirmLabel?: React.ReactNode;
  cancelLabel?: React.ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  /** Replace the default cancel/confirm pair. */
  actions?: React.ReactNode;
  /** Render the card in flow, without the fixed scrim (specimens, embeds). */
  inline?: boolean;
}

/** Hearth confirm dialog for irreversible actions. */
export function ConfirmDialog(props: ConfirmDialogProps): JSX.Element;
