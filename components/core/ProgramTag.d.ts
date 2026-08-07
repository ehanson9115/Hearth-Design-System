import React from 'react';

/**
 * Hearth program identity pill (WIC, SNAP, FMNP…).
 */
export interface ProgramTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Show the leading violet dot (default true). */
  dot?: boolean;
  children?: React.ReactNode;
}

export function ProgramTag(props: ProgramTagProps): JSX.Element;
