import React from 'react';

export interface TranscriptFlag {
  text: React.ReactNode;
  /** Action link label, e.g. "Add note". */
  action?: React.ReactNode;
}

export interface TranscriptMessage {
  speaker: React.ReactNode;
  /** Caseworker turn — renders the speaker in violet. */
  worker?: boolean;
  time?: React.ReactNode;
  text: React.ReactNode;
  /** Sunflower flag inset on this turn. */
  flag?: TranscriptFlag;
}

export interface TranscriptProps extends React.HTMLAttributes<HTMLDivElement> {
  messages?: TranscriptMessage[];
  onFlagAction?: (message: TranscriptMessage, index: number) => void;
  children?: React.ReactNode;
}

/** Hearth live interview transcript with flagged turns. */
export function Transcript(props: TranscriptProps): JSX.Element;
