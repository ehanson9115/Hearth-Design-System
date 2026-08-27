import React from 'react';
import { Toast } from './Toast.jsx';

export default {
  title: 'Feedback/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A brief ink confirmation for something that just worked: "Document uploaded." Green check + white text on the dark ink surface.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=23-17',
    },
  },
  argTypes: {
    check: { control: 'boolean' },
  },
};

export const Default = {
  args: { children: 'Document uploaded' },
};

export const WithoutCheck = {
  args: { check: false, children: 'Saved' },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
      <Toast>Document uploaded</Toast>
      <Toast check={false}>Saved</Toast>
    </div>
  ),
};
