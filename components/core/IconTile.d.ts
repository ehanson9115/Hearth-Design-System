/* @kit none — intentional addition, confirmed 2026-08-07. Two consuming
   projects (Health Net CE, MetroPlus CE) independently invented an icon-chip
   atom; promoted to canon. Rationale: readme.md → "Intentional additions". */
import React from 'react';

export type IconTileTone = 'action' | 'data' | 'success' | 'warning' | 'danger';

/**
 * Hearth icon tile — the tinted chip every standalone glyph sits inside.
 */
export interface IconTileProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Tabler icon class, e.g. "ti-stethoscope". */
  icon: string;
  /** Color role. Default 'action' (violet). */
  tone?: IconTileTone;
  /** Solid fill (vivid bg + white glyph) instead of the default tint. Action and success only. */
  solid?: boolean;
  /** Circle instead of the default rounded square. */
  circle?: boolean;
  /** Tile edge in px. Default 24. Radius scales (size/4); glyph scales (~0.58×). */
  size?: number;
}

export function IconTile(props: IconTileProps): JSX.Element;
