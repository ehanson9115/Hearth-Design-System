import React from 'react';

export interface SegOption { value: string; label: React.ReactNode; }

export interface SegmentedControlProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Options as strings or {value,label}. Keep to 2–4. */
  options: (string | SegOption)[];
  value?: string;
  onChange?: (value: string) => void;
  /** Equal segments filling the container — for a view switcher above content. */
  fullWidth?: boolean;
  /** `sm` 34px inline chip (default) or `md` 44px touch bar. */
  size?: 'sm' | 'md';
}

/** Hearth segmented control (pill toggle) for a small exclusive set. */
export function SegmentedControl(props: SegmentedControlProps): JSX.Element;
