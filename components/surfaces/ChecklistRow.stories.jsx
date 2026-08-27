import React from 'react';
import { ChecklistRow } from './ChecklistRow.jsx';
import { Panel } from './Panel.jsx';

export default {
  title: 'Surfaces/ChecklistRow',
  component: ChecklistRow,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'a row for action-item panels. Numbered rows (`number`) are follow-up questions with a royal chip; plain rows are checkbox documents, struck through with a vivid-green check when `done`.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=161-19',
    },
  },
  argTypes: {
    number: { control: 'number' },
    done: { control: 'boolean' },
    onClick: { table: { disable: true } },
  },
};

export const NumberedQuestion = {
  args: { number: 1, children: 'Confirm out-of-pocket medical costs.' },
};

export const DocumentPending = {
  args: { children: 'Mortgage statement' },
};

export const DocumentDone = {
  args: { done: true, children: 'Government-issued photo ID' },
};

export const AllVariants = {
  render: () => (
    <Panel title="Action items" icon="ti-clipboard-list" subtitle="2 questions · 2 documents remaining">
      <Panel.Section>Follow-up questions</Panel.Section>
      <ChecklistRow number={1}>Confirm out-of-pocket medical costs.</ChecklistRow>
      <ChecklistRow number={2}>Request 30 days of pay stubs.</ChecklistRow>
      <Panel.Section divide>Documents to request</Panel.Section>
      <ChecklistRow done>Government-issued photo ID</ChecklistRow>
      <ChecklistRow>Mortgage statement</ChecklistRow>
    </Panel>
  ),
};
