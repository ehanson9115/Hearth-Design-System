import React from 'react';
import { BottomSheet } from './BottomSheet.jsx';
import { Button } from '../core/Button.jsx';

export default {
  title: 'Resident Mobile/BottomSheet',
  component: BottomSheet,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A focused decision without leaving the screen: grab handle, one 17px question-title, muted body, stacked actions (primary on top, quiet dismiss under it).',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=25-18',
    },
  },
  argTypes: {
    actions: { table: { disable: true } },
    handle: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    title: 'Cancel this appointment?',
    children: 'Tuesday, July 28 at 10:30 AM. You can book a new time right after.',
    actions: (
      <>
        <Button variant="primary" fullWidth>Yes, cancel it</Button>
        <Button variant="link">Keep appointment</Button>
      </>
    ),
  },
};

export const WithoutHandle = {
  args: {
    ...Default.args,
    handle: false,
  },
};
