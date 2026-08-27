import React from 'react';
import { StatusRow } from './StatusRow.jsx';
import { Badge } from '../core/Badge.jsx';

export default {
  title: 'Resident Mobile/StatusRow',
  component: StatusRow,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "One item's standing at a glance: violet icon tile, title, quiet date line, trailing status badge. Stack rows inside a card; hairlines divide automatically.",
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=16-44',
    },
  },
  argTypes: {
    badge: { table: { disable: true } },
    onClick: { table: { disable: true } },
  },
};

export const Complete = {
  args: {
    icon: 'ti-school',
    title: 'Annual training',
    subtitle: 'Completed Apr 28, 2026',
    badge: <Badge variant="success">Complete</Badge>,
  },
};

export const Scheduled = {
  args: {
    icon: 'ti-school',
    title: 'Recertification',
    subtitle: 'Due Aug 15, 2026',
    badge: <Badge variant="warning">Scheduled</Badge>,
  },
};

export const Stacked = {
  render: () => (
    <div style={{ maxWidth: 360 }}>
      <StatusRow
        icon="ti-school"
        title="Annual training"
        subtitle="Completed Apr 28, 2026"
        badge={<Badge variant="success">Complete</Badge>}
      />
      <StatusRow
        icon="ti-school"
        title="Recertification"
        subtitle="Due Aug 15, 2026"
        badge={<Badge variant="warning">Scheduled</Badge>}
      />
    </div>
  ),
};
