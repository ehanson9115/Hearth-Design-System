import React from 'react';

/**
 * Hearth mobile multi-step top nav with progress rail.
 */
export interface TopNavProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current step number — renders "Step {step} of {of}". */
  step?: number;
  of?: number;
  /** Progress 0–100. Defaults to step/of when omitted. */
  progress?: number;
  /** Flip the right action to the green "Saved" confirmation. */
  saved?: boolean;
  backLabel?: React.ReactNode;
  actionLabel?: React.ReactNode;
  savedLabel?: React.ReactNode;
  onBack?: () => void;
  onAction?: () => void;
}

export function TopNav(props: TopNavProps): JSX.Element;
