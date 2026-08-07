import React from 'react';

/**
 * Hearth selectable option card (radio / checkbox).
 */
export interface OptionCardProps extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'onSelect'> {
  /** `radio` (round indicator) or `checkbox` (square). */
  type?: 'radio' | 'checkbox';
  selected?: boolean;
  title: React.ReactNode;
  /** Optional supporting line under the title. */
  description?: React.ReactNode;
  name?: string;
  value?: string;
  /** Called with `value` on click. */
  onSelect?: (value?: string) => void;
  children?: React.ReactNode;
}

export function OptionCard(props: OptionCardProps): JSX.Element;
