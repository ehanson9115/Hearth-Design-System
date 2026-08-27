import React from 'react';
import { Hero } from './Hero.jsx';

export default {
  title: 'Surfaces/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'the violet→royal gradient welcome block. The only gradient in Hearth; one per screen, top of a dashboard or mobile home.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=164-98',
    },
  },
};

export const WelcomeBack = {
  args: {
    title: 'Welcome back, Maria',
    children: 'Your next appointment is Tuesday, July 28 at 10:30 AM.',
  },
};

export const TitleOnly = {
  args: {
    title: 'Welcome back, Maria',
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 420 }}>
      <Hero title="Welcome back, Maria">
        Your next appointment is Tuesday, July 28 at 10:30 AM.
      </Hero>
      <Hero title="Welcome back, Maria" />
    </div>
  ),
};
