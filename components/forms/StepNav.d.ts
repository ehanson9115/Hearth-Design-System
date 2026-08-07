import React from 'react';

export interface StepNavProps extends React.HTMLAttributes<HTMLDivElement> {
  step?: number;
  of?: number;
  /** Section name after the step label, e.g. "About your household". */
  section?: React.ReactNode;
  title?: React.ReactNode;
  hint?: React.ReactNode;
  onBack?: () => void;
  /** Footer control row (compose Buttons, StepNav.Spacer, StepNav.SaveLater). */
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

/** Hearth multi-step form navigation header + footer scaffold. */
export function StepNav(props: StepNavProps): JSX.Element;

/** "Save and finish later" link for the StepNav footer. Also StepNav.SaveLater. */
export function StepNavSaveLater(props: React.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element;

/** Flexible gap that pushes the primary CTA right. Also StepNav.Spacer. */
export function StepNavSpacer(): JSX.Element;
