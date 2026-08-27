import React from 'react';
import { Button } from './Button.jsx';
import { Eyebrow } from './Eyebrow.jsx';

export default {
  title: 'Core/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "Hearth's primary interactive control. Use for any commit or navigate action; exactly one `primary` per view.",
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=15-14',
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tint', 'ghost', 'link', 'danger'],
    },
    size: {
      control: 'select',
      options: ['md', 'desktop', 'sm'],
    },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
    type: { table: { disable: true } },
  },
};

export const Primary = {
  args: { variant: 'primary', size: 'md', icon: 'ti-calendar', children: 'Book appointment' },
};

export const Secondary = {
  args: { variant: 'secondary', size: 'md', children: 'View details' },
};

export const Tint = {
  args: { variant: 'tint', size: 'md', children: 'Save for later' },
};

export const Link = {
  args: { variant: 'link', size: 'md', href: '#', children: "Learn what's covered" },
};

export const Danger = {
  args: { variant: 'danger', size: 'md', children: 'Remove record' },
};

export const Disabled = {
  args: {
    variant: 'primary',
    size: 'md',
    icon: 'ti-calendar',
    children: 'Book appointment',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'An inert control reads as a grey shape, never a faded violet one — a dimmed action hue still looks pressable. Filled variants (`primary`, `tint`) drop to the grey fill; bordered variants (`secondary`, `danger`) keep the white card face and grey the stroke. Set `disabled` rather than removing the handler, so the reason can sit next to the button.',
      },
    },
  },
};

export const AllDisabled = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        <Button variant="primary" icon="ti-calendar" disabled>Book appointment</Button>
        <Button variant="secondary" disabled>View details</Button>
        <Button variant="tint" disabled>Save for later</Button>
        <Button variant="link" href="#" disabled>Learn what's covered</Button>
        <Button variant="danger" disabled>Remove record</Button>
      </div>
      <div
        style={{
          display: 'flex',
          gap: 12,
          alignItems: 'center',
          background: 'var(--ht-ink)',
          borderRadius: 'var(--ht-r-card)',
          padding: 16,
        }}
      >
        <Button variant="ghost">Export</Button>
        <Button variant="ghost" disabled>Export</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Every variant disabled. `ghost` is shown on dark ink beside its enabled twin — it stays a white-alpha treatment, since a grey fill would disappear against the admin header.',
      },
    },
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Eyebrow>Enabled</Eyebrow>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <Button variant="primary" icon="ti-calendar">Book appointment</Button>
          <Button variant="secondary">View details</Button>
          <Button variant="tint">Save for later</Button>
          <Button variant="link" href="#">Learn what's covered</Button>
          <Button variant="danger">Remove record</Button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Eyebrow>Disabled</Eyebrow>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <Button variant="primary" icon="ti-calendar" disabled>Book appointment</Button>
          <Button variant="secondary" disabled>View details</Button>
          <Button variant="tint" disabled>Save for later</Button>
          <Button variant="link" href="#" disabled>Learn what's covered</Button>
          <Button variant="danger" disabled>Remove record</Button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Eyebrow>Ghost — dark ink only</Eyebrow>
        <div
          style={{
            display: 'flex',
            gap: 12,
            alignItems: 'center',
            background: 'var(--ht-ink)',
            borderRadius: 'var(--ht-r-card)',
            padding: 16,
          }}
        >
          <Button variant="ghost">Export</Button>
          <Button variant="ghost" disabled>Export</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'The full matrix. Disabled greys the control instead of fading it — filled variants drop to the grey fill, bordered variants keep the white face and grey the stroke, `link` greys text and underline. `ghost` is the exception: it stays a white-alpha treatment, since a grey fill would vanish against the admin header.',
      },
    },
  },
};
