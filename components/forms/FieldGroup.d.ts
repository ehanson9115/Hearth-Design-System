/* @kit none — intentional addition, confirmed 2026-08-03. Multi-field rows need
   one shared label/hint/error. Rationale: readme.md → "Intentional additions". */
import React from 'react';

export interface FieldGroupProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  /** Group name — a real <legend>, announced with every field inside. */
  legend?: React.ReactNode;
  /** Muted line under the legend. */
  description?: React.ReactNode;
  /** Drop the hairline and let the page tint do the containing. */
  flush?: boolean;
  /** Row rhythm. Default 20px. */
  gap?: number | string;
  children?: React.ReactNode;
}

/** Hearth field group — related questions contained on one white surface. */
export function FieldGroup(props: FieldGroupProps): JSX.Element;
