/* @kit none — intentional addition, confirmed 2026-08-03. Notice history is a
   dated sequence, not an avatar feed. Rationale: readme.md → "Intentional additions". */
import React from 'react';

export interface NoticeChannel {
  /** "Email", "SMS", "Portal", "Mail", "Phone" — icon is inferred from these. */
  label: React.ReactNode;
  /** Override the inferred Tabler icon. */
  icon?: string;
}

export interface NoticeItem {
  title: React.ReactNode;
  /** Timestamp, e.g. "Mar 14 at 09:30 AM". */
  when?: React.ReactNode;
  /** Delivery channel — string shorthand or {label, icon}. */
  channel?: string | NoticeChannel;
  body?: React.ReactNode;
}

export interface NoticeTimelineProps extends React.HTMLAttributes<HTMLElement> {
  title?: React.ReactNode;
  /** Header icon. Default "ti-bell". */
  icon?: string;
  /** Newest first — index 0 gets the violet dot. */
  items?: NoticeItem[];
  collapsible?: boolean;
  defaultOpen?: boolean;
  /** Append "(n)" to the header title. Default true. */
  showCount?: boolean;
}

/** Hearth notice timeline — what the agency sent, and when. */
export function NoticeTimeline(props: NoticeTimelineProps): JSX.Element;
