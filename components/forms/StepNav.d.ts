import React from 'react';

export interface StepNavProps extends React.HTMLAttributes<HTMLDivElement> {
  step?: number;
  of?: number;
  /** Which part of a long form this step belongs to. Renders as an uppercase
   *  `Eyebrow` at the left of the counter row — not as a clause after the
   *  counter. Omit on short flows where the title is orientation enough. */
  section?: React.ReactNode;
  title?: React.ReactNode;
  hint?: React.ReactNode;
  onBack?: () => void;
  children?: React.ReactNode;
}

/** Hearth multi-step form headline block. Renders no action buttons — Back and
 *  Continue belong under the step content, in a sibling of this block. */
export function StepNav(props: StepNavProps): JSX.Element;


