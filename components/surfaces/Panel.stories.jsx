import React from 'react';
import { Panel } from './Panel.jsx';
import { ChecklistRow } from './ChecklistRow.jsx';

export default {
  title: 'Surfaces/Panel',
  component: Panel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'the card-with-header-zone. Cake-style header (ink headline + muted subtitle), optional action button. `band` turns the header into the dark ink band, reserved for the ONE live/primary panel per screen.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=162-36',
    },
  },
  argTypes: {
    band: { control: 'boolean' },
    live: { control: 'boolean' },
    action: { table: { disable: true } },
    onAction: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};

export const ApplicantDetail = {
  args: {
    title: 'Applicant',
    icon: 'ti-id',
    subtitle: 'Case 2026-499-929 · opened July 14',
    action: 'Copy',
    onAction: () => {},
    children: (
      <Panel.Body>
        <p><strong>Name:</strong> Maria Alvarez</p>
        <p><strong>Date of birth:</strong> March 28, 1986</p>
      </Panel.Body>
    ),
  },
};

export const ActionItems = {
  args: {
    title: 'Action items',
    icon: 'ti-clipboard-list',
    subtitle: '2 questions · 2 documents remaining',
    children: (
      <>
        <Panel.Section>Follow-up questions</Panel.Section>
        <ChecklistRow number={1}>Confirm out-of-pocket medical costs.</ChecklistRow>
        <ChecklistRow number={2}>Request 30 days of pay stubs.</ChecklistRow>
        <Panel.Section divide>Documents to request</Panel.Section>
        <ChecklistRow done>Government-issued photo ID</ChecklistRow>
        <ChecklistRow>Mortgage statement</ChecklistRow>
      </>
    ),
  },
};

export const LiveBand = {
  args: {
    band: true,
    live: true,
    title: 'Live transcript',
    meta: '73 messages',
    children: (
      <Panel.Body>
        <p style={{ margin: 0 }}>Caseworker: Let's go over your remaining documents.</p>
      </Panel.Body>
    ),
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 420 }}>
      <Panel title="Applicant" icon="ti-id" subtitle="Case 2026-499-929 · opened July 14" action="Copy" onAction={() => {}}>
        <Panel.Body>
          <p><strong>Name:</strong> Maria Alvarez</p>
          <p><strong>Date of birth:</strong> March 28, 1986</p>
        </Panel.Body>
      </Panel>
      <Panel title="Action items" icon="ti-clipboard-list" subtitle="2 questions · 2 documents remaining">
        <Panel.Section>Follow-up questions</Panel.Section>
        <ChecklistRow number={1}>Confirm out-of-pocket medical costs.</ChecklistRow>
        <Panel.Section divide>Documents to request</Panel.Section>
        <ChecklistRow done>Government-issued photo ID</ChecklistRow>
        <ChecklistRow>Mortgage statement</ChecklistRow>
      </Panel>
      <Panel band live title="Live transcript" meta="73 messages">
        <Panel.Body>
          <p style={{ margin: 0 }}>Caseworker: Let's go over your remaining documents.</p>
        </Panel.Body>
      </Panel>
    </div>
  ),
};
