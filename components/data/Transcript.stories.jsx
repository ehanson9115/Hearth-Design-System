import React from 'react';
import { Transcript } from './Transcript.jsx';
import { Panel } from '../surfaces/Panel.jsx';

export default {
  title: 'Data/Transcript',
  component: Transcript,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A live interview transcript. Caseworker turns show in violet; flagged turns follow the outlined status convention: a near-white amber wash with a vivid amber stroke.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=168-26',
    },
  },
  argTypes: {
    messages: { table: { disable: true } },
    onFlagAction: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};

export const Default = {
  args: {
    messages: [
      {
        speaker: 'Caseworker',
        worker: true,
        time: '1:53 PM',
        text: 'And what do you pay in rent or mortgage each month?',
      },
      {
        speaker: 'Applicant',
        time: '1:55 PM',
        text: "It's about $2,350 all in: mortgage, taxes, insurance.",
        flag: { text: 'High shelter costs, check deduction', action: 'Add note' },
      },
    ],
  },
  render: (args) => (
    <Panel band live title="Live transcript" meta={`${args.messages.length} messages`}>
      <Transcript {...args} />
    </Panel>
  ),
};

export const NoFlags = {
  args: {
    messages: [
      {
        speaker: 'Caseworker',
        worker: true,
        time: '1:53 PM',
        text: 'And what do you pay in rent or mortgage each month?',
      },
      {
        speaker: 'Applicant',
        time: '1:55 PM',
        text: "It's about $2,350 all in: mortgage, taxes, insurance.",
      },
    ],
  },
  render: (args) => (
    <Panel band live title="Live transcript" meta={`${args.messages.length} messages`}>
      <Transcript {...args} />
    </Panel>
  ),
};
