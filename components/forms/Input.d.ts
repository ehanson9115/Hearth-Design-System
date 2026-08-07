/* @kit Input (State: 4) — name matches the kit. Owns label + hint + error
   around the control, so a form question is one element. */
import React from 'react';

export interface FieldOption { value: string; label: string; }

/**
 * Hearth form field: label, hint, control, error in one unit.
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'> {
  /** Label text, rendered 6px above the control. */
  label?: React.ReactNode;
  /** Helper copy. Between label and control it sits tight; below it gets 8px. */
  hint?: React.ReactNode;
  /** Fix-it error message. Shows the red pip + turns the control invalid. */
  error?: React.ReactNode;
  /** Which control to render. */
  as?: 'input' | 'textarea' | 'select';
  /** Options for `as="select"` (strings or {value,label}). */
  options?: (string | FieldOption)[];
  /** Force the invalid style without an error message. */
  invalid?: boolean;
  /** Show a live "N characters left" counter (needs maxLength). */
  showCount?: boolean;
  value?: string | number;
  /** Control fill. Defaults to `--ht-field-fill` (white standalone, tinted
   *  inside a FieldGroup). Set explicitly to override in either direction. */
  fill?: 'tint' | 'white';
  fullWidth?: boolean;
}

export function Input(props: InputProps): JSX.Element;
