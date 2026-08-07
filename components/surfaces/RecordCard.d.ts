/* @kit none — intentional addition, confirmed 2026-08-03. Records need per-entry
   confirm/edit/remove. Rationale: readme.md → "Intentional additions". */
import React from 'react';

export interface RecordDetail {
  /** Tabler icon class for the row, e.g. "ti-calendar". */
  icon?: string;
  text: React.ReactNode;
}

export interface RecordCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tabler icon for the 40px tile. Default "ti-building". */
  icon?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  details?: RecordDetail[];
  confirmLabel?: React.ReactNode;
  confirmed?: boolean;
  /** Omit to hide the confirm checkbox. */
  onConfirm?: (next: boolean) => void;
  onEdit?: () => void;
  onRemove?: () => void;
  editLabel?: React.ReactNode;
  removeLabel?: React.ReactNode;
}

/** Hearth record card — one reported item, laid out to confirm or correct. */
export function RecordCard(props: RecordCardProps): JSX.Element;
