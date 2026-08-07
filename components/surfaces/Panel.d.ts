import React from 'react';

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode;
  /** Leading Tabler icon class (hidden when `live`). */
  icon?: string;
  /** Muted subtitle under the headline (non-band panels). */
  subtitle?: React.ReactNode;
  /** Header action button label (right-aligned). */
  action?: React.ReactNode;
  onAction?: () => void;
  /** Dark ink band header — the ONE live/primary panel per screen. */
  band?: boolean;
  /** Green pulse dot (with band) for live panels. */
  live?: boolean;
  /** Right-aligned band metadata, e.g. "73 messages". */
  meta?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Hearth panel with header zone (+ dark band variant).
 */
export function Panel(props: PanelProps): JSX.Element & {
  Body: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  Section: React.FC<{ divide?: boolean } & React.HTMLAttributes<HTMLDivElement>>;
};

/** Padded body region for a Panel. Also available as Panel.Body. */
export function PanelBody(props: React.HTMLAttributes<HTMLDivElement>): JSX.Element;

/** Caps sub-section header inside a Panel. Also available as Panel.Section. */
export function PanelSection(props: { divide?: boolean } & React.HTMLAttributes<HTMLDivElement>): JSX.Element;
