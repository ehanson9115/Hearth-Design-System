import React from 'react';

export type IncomeProvider = 'truv' | 'argyle';

export interface IncomeButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Which partner's wordmark to render. */
  provider?: IncomeProvider;
  /** Text before the wordmark. Kept a prop for translation, not for rewording. */
  label?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  /** Render as an anchor instead of a button. */
  href?: string;
}

/**
 * Hearth income-verification handoff button — "Continue with <partner>", the
 * partner rendered as a wordmark. Deeper violet than a primary Button on
 * purpose: it hands off to a third party rather than advancing the step.
 */
export function IncomeButton(props: IncomeButtonProps): JSX.Element;
