import React from 'react';
import { DataTable } from './DataTable.jsx';
import { Badge } from '../core/Badge.jsx';

const residents = [
  { id: 'A-10293', name: 'Maria Alvarez', status: 'Approved', tone: 'success', assigned: 'Bob Stoops', updated: '2:04 PM' },
  { id: 'A-10310', name: 'Sam Ortiz', status: 'Pending review', tone: 'warning', assigned: 'Dana Kim', updated: '1:38 PM' },
  { id: 'A-10344', name: 'Bob Stoops', status: 'Needs info', tone: 'danger', assigned: 'Unassigned', updated: '11:20 AM' },
];

export default {
  title: 'Data/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Hearth data table: hairline rows, hover tint, right-aligned numerics. Compose Badge for status cells and DataTable.Name for stacked name/ID cells.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=167-51',
    },
  },
  argTypes: {
    columns: { table: { disable: true } },
    rows: { table: { disable: true } },
  },
};

export const Default = {
  args: {
    rowKey: 'id',
    columns: [
      {
        key: 'resident',
        header: 'Resident',
        render: (r) => <DataTable.Name sub={r.id}>{r.name}</DataTable.Name>,
      },
      {
        key: 'status',
        header: 'Status',
        render: (r) => <Badge variant={r.tone}>{r.status}</Badge>,
      },
      { key: 'assigned', header: 'Assigned' },
      { key: 'updated', header: 'Updated', align: 'right' },
    ],
    rows: residents,
  },
};

export const FixedWidths = {
  args: {
    ...Default.args,
    columns: [
      {
        key: 'resident',
        header: 'Resident',
        width: 260,
        render: (r) => <DataTable.Name sub={r.id}>{r.name}</DataTable.Name>,
      },
      {
        key: 'status',
        header: 'Status',
        width: 160,
        render: (r) => <Badge variant={r.tone}>{r.status}</Badge>,
      },
      { key: 'assigned', header: 'Assigned', width: 160 },
      { key: 'updated', header: 'Updated', align: 'right', width: 100 },
    ],
  },
};
