import React from 'react';

export interface ChecklistRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Renders a royal number chip instead of a checkbox (follow-up questions). */
  number?: number;
  /** Checkbox rows only: done = vivid-green check + strikethrough. */
  done?: boolean;
  children?: React.ReactNode;
}

/** Hearth checklist row — numbered question or checkbox document item. */
export function ChecklistRow(props: ChecklistRowProps): JSX.Element;
