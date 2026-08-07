import React from 'react';

export interface ProgramCardMeta {
  /** Tabler icon class, e.g. "ti-users". */
  icon?: string;
  label: React.ReactNode;
}

export interface ProgramCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tabler icon class for the round logo slot, or a node (an <img> of the
   *  program's real mark — the slot is a theme asset in Figma). */
  logo?: string | React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Eligibility / timing facts, one row each. */
  meta?: ProgramCardMeta[];
  /** Omit for the compact status card (32px logo, no button). */
  ctaLabel?: React.ReactNode;
  /** `primary` on the one program you want applied for; `secondary` elsewhere. */
  ctaVariant?: 'primary' | 'secondary';
  onCta?: () => void;
  /** `pending` draws the sunflower stroke + solid logo slot: an application
   *  already in review. Status form only. */
  tone?: 'default' | 'pending';
  children?: React.ReactNode;
}

/** Hearth program card — 16px editorial radius, floating shadow, one CTA max. */
export function ProgramCard(props: ProgramCardProps): JSX.Element;
