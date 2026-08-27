import React from 'react';
import '../styles.css';

// core
import { Avatar } from '../components/core/Avatar.jsx';
import { Badge } from '../components/core/Badge.jsx';
import { Button } from '../components/core/Button.jsx';
import { Eyebrow } from '../components/core/Eyebrow.jsx';
import { IconTile } from '../components/core/IconTile.jsx';
import { Pill } from '../components/core/Pill.jsx';
import { ProgramTag } from '../components/core/ProgramTag.jsx';
import { ProgressBar } from '../components/core/ProgressBar.jsx';
import { SegmentedControl } from '../components/core/SegmentedControl.jsx';
// forms
import { FieldGroup } from '../components/forms/FieldGroup.jsx';
import { FileUpload } from '../components/forms/FileUpload.jsx';
import { Input } from '../components/forms/Input.jsx';
import { OptionCard } from '../components/forms/OptionCard.jsx';
import { SegmentedYesNo } from '../components/forms/SegmentedYesNo.jsx';
import { Select } from '../components/forms/Select.jsx';
import { StepNav } from '../components/forms/StepNav.jsx';
import { Stepper } from '../components/forms/Stepper.jsx';
// feedback
import { AnnouncementBar } from '../components/feedback/AnnouncementBar.jsx';
import { ConfirmDialog } from '../components/feedback/ConfirmDialog.jsx';
import { NotificationCard } from '../components/feedback/NotificationCard.jsx';
import { Skeleton } from '../components/feedback/Skeleton.jsx';
import { StatusCard } from '../components/feedback/StatusCard.jsx';
import { SuccessHero } from '../components/feedback/SuccessHero.jsx';
import { Toast } from '../components/feedback/Toast.jsx';
// surfaces
import { ChecklistRow } from '../components/surfaces/ChecklistRow.jsx';
import { EntryCard } from '../components/surfaces/EntryCard.jsx';
import { Hero } from '../components/surfaces/Hero.jsx';
import { HighlightCard } from '../components/surfaces/HighlightCard.jsx';
import { MetricCard } from '../components/surfaces/MetricCard.jsx';
import { Panel } from '../components/surfaces/Panel.jsx';
import { ProgramCard } from '../components/surfaces/ProgramCard.jsx';
import { RecordCard } from '../components/surfaces/RecordCard.jsx';
import { ReviewTile } from '../components/surfaces/ReviewTile.jsx';
// data
import { ActivityList } from '../components/data/ActivityList.jsx';
import { DataTable } from '../components/data/DataTable.jsx';
import { NoticeTimeline } from '../components/data/NoticeTimeline.jsx';
import { Transcript } from '../components/data/Transcript.jsx';
// navigation
import { DarkHeader } from '../components/navigation/DarkHeader.jsx';
import { MobileBottomNav } from '../components/navigation/MobileBottomNav.jsx';
import { SideNav } from '../components/navigation/SideNav.jsx';
import { TopNav } from '../components/navigation/TopNav.jsx';
// resident-mobile
import { ActionSheet } from '../components/resident-mobile/ActionSheet.jsx';
import { ActivityCard } from '../components/resident-mobile/ActivityCard.jsx';
import { BottomSheet } from '../components/resident-mobile/BottomSheet.jsx';
import { DocumentsCard } from '../components/resident-mobile/DocumentsCard.jsx';
import { HoursSummary } from '../components/resident-mobile/HoursSummary.jsx';
import { ProgramStatusCard } from '../components/resident-mobile/ProgramStatusCard.jsx';
import { StatusRow } from '../components/resident-mobile/StatusRow.jsx';
import { TransactionRow } from '../components/resident-mobile/TransactionRow.jsx';

// Hearth's own preview mechanism (every `*.card.html` specimen) mounts all
// components on `window.Hearth_5938e8` via the pre-built `_ds_bundle.js`.
// A few components (ConfirmDialog's default action row) read that global at
// render time instead of importing a sibling directly, so Storybook's preview
// bootstraps the same namespace here to keep behavior identical to the
// existing specimen cards.
const ns = (typeof window !== 'undefined' ? window : globalThis).Hearth_5938e8 ||= {};
Object.assign(ns, {
  Avatar, Badge, Button, Eyebrow, IconTile, Pill, ProgramTag, ProgressBar, SegmentedControl,
  FieldGroup, FileUpload, Input, OptionCard, SegmentedYesNo, Select, StepNav, Stepper,
  AnnouncementBar, ConfirmDialog, NotificationCard, Skeleton, StatusCard, SuccessHero, Toast,
  ChecklistRow, EntryCard, Hero, HighlightCard, MetricCard, Panel, ProgramCard, RecordCard, ReviewTile,
  ActivityList, DataTable, NoticeTimeline, Transcript,
  DarkHeader, MobileBottomNav, SideNav, TopNav,
  ActionSheet, ActivityCard, BottomSheet, DocumentsCard, HoursSummary, ProgramStatusCard, StatusRow, TransactionRow,
});

const DARK_KEY = 'hearth-dark';

// Same dark-mode toggle mechanism as CIVIC's Storybook: D key flips a .dark
// class on the story iframe's <html>, persisted to localStorage and synced
// across frames. The class is token-driven; Hearth's token layer is single
// mode today, so components keep their light values until tokens/ grows dark
// overrides. The chrome and canvas follow the toggle now.
function DarkModeToggle({ children }) {
  const [dark, setDark] = React.useState(() => {
    const stored = localStorage.getItem(DARK_KEY);
    return stored !== null ? stored === '1' : document.documentElement.classList.contains('dark');
  });

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    document.body.style.background = dark ? '#111113' : 'var(--ht-bg)';
    document.body.style.colorScheme = dark ? 'dark' : 'light';
  }, [dark]);

  React.useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === DARK_KEY) setDark(e.newValue === '1');
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.repeat || e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key.toLowerCase() !== 'd') return;
      setDark((d) => {
        const next = !d;
        localStorage.setItem(DARK_KEY, next ? '1' : '0');
        return next;
      });
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return <>{children}</>;
}

/** @type {import('@storybook/react-vite').Preview} */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
      },
      // Pass-through chrome props: noise in a design reference.
      exclude: ['className', 'style'],
    },
    options: {
      storySort: {
        method: 'alphabetical',
        // Foundations (tokens) first, then component families in Hearth's own
        // category order. Stories sort alphabetically within each section.
        order: [
          'Foundations',
          'Core',
          'Forms',
          'Feedback',
          'Surfaces',
          'Data',
          'Navigation',
          'Resident Mobile',
        ],
      },
    },
    // Matches CIVIC's preview: center the component in the canvas, with the
    // same breathing room via the decorator below.
    layout: 'centered',
  },
  decorators: [
    (Story, context) => (
      <DarkModeToggle>
        {context.parameters.layout === 'fullscreen' ? (
          <Story />
        ) : (
          <div style={{ padding: 'var(--ht-space-2xl)' }}>
            <Story />
          </div>
        )}
      </DarkModeToggle>
    ),
  ],
};

export default preview;
