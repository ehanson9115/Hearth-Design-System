import React from 'react';

export interface SelectOption {
  value: string;
  label: React.ReactNode;
}

export interface SelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  /** Plain strings are used as both value and label. */
  options?: (string | SelectOption)[];
  /** Controlled value. Omit for uncontrolled + `defaultValue`. */
  value?: string | null;
  defaultValue?: string | null;
  onChange?: (value: string) => void;
  /** Shown in --ht-text-subtle until something is chosen. */
  placeholder?: string;
  disabled?: boolean;
  /** Red stroke only — pair with Input's `error` for the message. */
  invalid?: boolean;
  id?: string;
}

/**
 * Hearth select — 48px control, 6px radius, grey-1 fill, --ht-border stroke.
 * Keyboard: Enter/Space/↓ opens, ↑↓ moves, Enter picks, Esc closes.
 */
export function Select(props: SelectProps): JSX.Element;
