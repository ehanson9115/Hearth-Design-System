import React from 'react';
import { ConfirmDialog } from './ConfirmDialog.jsx';

export default {
  title: 'Feedback/ConfirmDialog',
  component: ConfirmDialog,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The desktop decision surface for irreversible caseworker actions: deny an application, close a case, delete a document. 420px card on a 45% ink scrim, tinted 40px icon, 17px/500 title, 14px muted body, right-aligned Cancel + Confirm.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=193-2',
    },
  },
  argTypes: {
    tone: {
      control: 'select',
      options: ['danger', 'warning', 'default'],
    },
    inline: { control: 'boolean' },
    onConfirm: { table: { disable: true } },
    onCancel: { table: { disable: true } },
    actions: { table: { disable: true } },
  },
};

// `inline` renders the card in flow (no fixed scrim) so it sits sanely inside
// the Storybook canvas; the default `inline={false}` behavior covers the
// full preview iframe with a scrim, which is demonstrated separately below.
export const Danger = {
  args: {
    inline: true,
    tone: 'danger',
    title: 'Deny this application?',
    confirmLabel: 'Deny application',
    cancelLabel: 'Cancel',
    children:
      'Bob Stoops will be notified today and the case closes. Reopening requires a supervisor.',
  },
};

export const Warning = {
  args: {
    inline: true,
    tone: 'warning',
    title: 'Close this case?',
    confirmLabel: 'Close case',
    cancelLabel: 'Cancel',
    children: 'This case will be marked closed. You can reopen it later from the case history.',
  },
};

export const Default = {
  args: {
    inline: true,
    tone: 'default',
    title: 'Discard unsaved changes?',
    confirmLabel: 'Discard',
    cancelLabel: 'Keep editing',
    children: 'Your edits to this form have not been saved.',
  },
};

// Demonstrates the real, default behavior: a fixed full-viewport scrim. This
// intentionally takes over the entire canvas frame; that's by design, not a
// bug in the story.
export const FullOverlay = {
  args: {
    tone: 'danger',
    title: 'Deny this application?',
    confirmLabel: 'Deny application',
    cancelLabel: 'Cancel',
    children:
      'Bob Stoops will be notified today and the case closes. Reopening requires a supervisor.',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Without `inline`, ConfirmDialog wraps itself in a fixed, full-viewport scrim by design; it will cover this entire preview frame.',
      },
    },
  },
};
