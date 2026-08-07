import React from 'react';

export interface SuccessHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  /** `success` green medallion (submitted, approved); `accent` violet
   *  medallion (a neutral milestone — saved, sent, scheduled). */
  tone?: 'success' | 'accent';
  /** Tabler icon class for the white glyph. Default "ti ti-check". */
  icon?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Actions, rendered below the copy. One primary Button at most. */
  children?: React.ReactNode;
}

/** Hearth success hero — 92px ring / 72px disc confirmation medallion. */
export function SuccessHero(props: SuccessHeroProps): JSX.Element;
