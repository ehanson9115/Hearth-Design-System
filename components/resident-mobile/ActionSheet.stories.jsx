import React from 'react';
import { ActionSheet } from './ActionSheet.jsx';

export default {
  title: 'Resident Mobile/ActionSheet',
  component: ActionSheet,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The OS-style choice list for quick contextual decisions: photo source, remove a document. One rounded group of 20px actions, destructive rows in AA red, then a separate bolder Cancel.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=41-2',
    },
  },
  argTypes: {
    actions: { table: { disable: true } },
    onCancel: { table: { disable: true } },
  },
};

export const Default = {
  args: {
    actions: [
      { label: 'Take photo' },
      { label: 'Choose from library' },
      { label: 'Remove', destructive: true },
    ],
    cancelLabel: 'Cancel',
  },
};

export const NoCancel = {
  args: {
    actions: [
      { label: 'Take photo' },
      { label: 'Choose from library' },
    ],
    cancelLabel: null,
  },
};
