import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'tint' | 'ghost' | 'link' | 'danger';
export type ButtonSize = 'md' | 'sm';

/**
 * Hearth button — medium-weight CTA. Never semibold.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual role. `primary` violet solid (one per view); `secondary` white
   *  bordered; `tint` violet-tint fill; `ghost` for dark ink headers only;
   *  `link` inline royal underline; `danger` white bordered with red text —
   *  irreversible actions inside a ConfirmDialog only. Never a red fill: a
   *  solid red button reads as the recommended action, which it never is. */
  variant?: ButtonVariant;
  /** `md` (44px min height) or compact `sm`. Ignored for `link`. */
  size?: ButtonSize;
  /** Leading Tabler icon class, e.g. "ti-calendar". */
  icon?: string;
  /** Trailing Tabler icon class. */
  iconRight?: string;
  fullWidth?: boolean;
  /** Render as an anchor instead of a button. */
  href?: string;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
