/* @kit Segmented / Yes-No (Selected: 2) — renamed from YesNo 2026-08-07 to match
   the kit vocabulary. Still the ratified two-option exception (tint + stroke, no
   indicator), distinct from SegmentedControl. */
import React from 'react';

/**
 * Hearth binary yes/no question control.
 */
export interface SegmentedYesNoProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** `'yes'`, `'no'`, or `null` (neither — the initial state). */
  value?: 'yes' | 'no' | null;
  /** Called with `'yes'` or `'no'` when a side is tapped. */
  onChange?: (value: 'yes' | 'no') => void;
  yesLabel?: React.ReactNode;
  noLabel?: React.ReactNode;
}

export function SegmentedYesNo(props: SegmentedYesNoProps): JSX.Element;
