import React from 'react';
import { Avatar } from './Avatar.jsx';

export default {
  title: 'Core/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "royal-tinted initials chip (or image). Use in activity rows, tables, transcripts.",
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=362-20',
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export const Default = {
  args: { size: 'md', name: 'Maria Alvarez' },
};

export const Large = {
  args: { name: 'Jordan Chen', size: 'lg' },
};

// A real inline placeholder photo (small solid-fill SVG), not a path that
// doesn't resolve to anything. The .prompt.md example used a bare "/photo.jpg"
// that has no matching asset anywhere in this repo, which just renders a
// broken-image icon over the fallback initials.
const PLACEHOLDER_PHOTO =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64'%3E%3Crect width='64' height='64' fill='%234C1EA8'/%3E%3Ccircle cx='32' cy='26' r='12' fill='%23fff' fill-opacity='.85'/%3E%3Cellipse cx='32' cy='60' rx='20' ry='16' fill='%23fff' fill-opacity='.85'/%3E%3C/svg%3E";

export const WithImage = {
  args: { src: PLACEHOLDER_PHOTO, name: 'Sam Ortiz' },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Avatar name="Maria Alvarez" size="sm" />
      <Avatar name="Maria Alvarez" />
      <Avatar name="Jordan Chen" size="lg" />
      <Avatar src={PLACEHOLDER_PHOTO} name="Sam Ortiz" />
    </div>
  ),
};
