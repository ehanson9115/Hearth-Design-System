import React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Full name — first two initials are shown when no image is given. */
  name?: string;
  /** Optional image URL. */
  src?: string;
  size?: 'sm' | 'md' | 'lg';
}

/** Hearth initials/image avatar chip. */
export function Avatar(props: AvatarProps): JSX.Element;
