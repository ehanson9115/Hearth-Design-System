/* @kit none — intentional addition, confirmed 2026-08-03. Household counts are a
   ± control, not a text input. Rationale: readme.md → "Intentional additions". */
import React from 'react';

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  onChange?: (next: number) => void;
  min?: number;
  max?: number;
  step?: number;
  /** Quiet suffix beside the value, e.g. "hrs". */
  unit?: React.ReactNode;
  /** Accessible name for the value and the two buttons. */
  label?: string;
  /** Mobile form: stretch to container width — buttons at the edges, value
   *  centered between (Emma, 2026-08-14). Default inline. */
  fullWidth?: boolean;
}

/** Hearth number stepper — 44px targets around a tabular count. */
export function Stepper(props: StepperProps): JSX.Element;
