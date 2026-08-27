import React from 'react';
import { DarkHeader } from '../../components/navigation/DarkHeader.jsx';
import { SideNav } from '../../components/navigation/SideNav.jsx';
import { HighlightCard } from '../../components/surfaces/HighlightCard.jsx';
import { AnnouncementBar } from '../../components/feedback/AnnouncementBar.jsx';
import { MetricCard } from '../../components/surfaces/MetricCard.jsx';
import { Panel, PanelBody } from '../../components/surfaces/Panel.jsx';
import { ActivityList } from '../../components/data/ActivityList.jsx';
import { Badge } from '../../components/core/Badge.jsx';

/**
 * The caseworker dashboard, composed from live component source.
 *
 * `CaseworkerDashboard.dc.html` is the canonical template, but it renders
 * through `_ds_bundle.js` — so it shows whatever the last design-tool compile
 * produced, not the current `.jsx`. This story imports the components
 * directly, which makes it the only surface where template-scale changes can
 * actually be reviewed before the bundle is recompiled. Keep the two in step.
 */
export default {
  title: 'Templates/Caseworker Dashboard',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Live-source render of the `CaseworkerDashboard` template. Use this to review token and component changes; the `.dc.html` template lags until `_ds_bundle.js` is recompiled.',
      },
    },
  },
};

const MENU = [
  { label: 'Menu', items: [
    { icon: 'ti-layout-dashboard', label: 'Dashboard', active: true },
    { icon: 'ti-list-check', label: 'My queue', meta: '8' },
    { icon: 'ti-users', label: 'Residents' },
    { icon: 'ti-file-text', label: 'Documents', meta: '3' },
    { icon: 'ti-chart-bar', label: 'Reports' },
    { icon: 'ti-settings', label: 'Settings' },
  ] },
];

const NAV = [
  { label: 'Home', active: true, href: '#' },
  { label: 'Queue', href: '#' },
  { label: 'Residents', href: '#' },
  { label: 'Reports', href: '#' },
];

const WHATS_NEW = [
  { label: 'Auto shelter flags', href: '#' },
  { label: 'Interview summaries', href: '#' },
  { label: 'Spanish transcripts', href: '#' },
];

const ACTIVITY = [
  { name: 'Bob Stoops', text: 'interview completed, notes ready', when: '2:04 PM',
    badge: <Badge variant="warning">Pending review</Badge> },
  { name: 'Maria Alvarez', text: 'uploaded proof of address', when: '1:38 PM',
    badge: <Badge variant="success">Complete</Badge> },
  { name: 'Sam Ortiz', text: 'approved, notice sent', when: '11:20 AM',
    badge: <Badge variant="success">Approved</Badge> },
  { name: 'Dana Whitfield', text: 'flagged over income limit', when: 'Yesterday' },
];

const CASELOAD = [
  ['Pending review', '40%', 'var(--ht-action)'],
  ['In progress', '30%', 'var(--ht-data)'],
  ['Needs documents', '20%', 'var(--ht-data-mid)'],
  ['Other', '10%', 'var(--ht-data-tint)'],
];

export const Default = {
  render: () => (
    <div style={{ minHeight: '100vh', background: 'var(--ht-sidebar-bg)', padding: 24,
                  fontFamily: 'var(--ht-font-sans)', color: 'var(--ht-text)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', border: '1px solid var(--ht-border)',
                    borderRadius: 12, overflow: 'hidden', background: 'var(--ht-bg)' }}>
        <DarkHeader name="Healthy Together" role="Caseworker" nav={NAV} action="Send invite" />
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr' }}>
          <SideNav groups={MENU}>
            <HighlightCard title="What's new" icon="ti-sparkles" items={WHATS_NEW} />
          </SideNav>
          <main style={{ padding: '32px 34px' }}>
            <h1 style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.015em',
                         color: 'var(--ht-text-head)', margin: 0 }}>Good morning, Jordan</h1>
            <p style={{ fontSize: 14, color: 'var(--ht-text-muted)', margin: '4px 0 24px' }}>
              Monday, July 20 — you have 5 interviews scheduled today.
            </p>

            <div style={{ marginBottom: 24 }}>
              <AnnouncementBar action="See how it works">
                New: excess shelter deductions are now flagged automatically during interviews.
              </AnnouncementBar>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 24 }}>
              <MetricCard value="8" label="Pending review" />
              <MetricCard value="3" label="Waiting on documents" variant="warn" />
              <MetricCard value="5" label="Interviews today" />
              <MetricCard value="21" trend="4" label="Completed this week" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16, alignItems: 'start' }}>
              <Panel title="Recent activity" icon="ti-activity"
                     subtitle="Last updated 2 minutes ago" action="View queue">
                <PanelBody>
                  <ActivityList items={ACTIVITY} />
                </PanelBody>
              </Panel>

              <Panel title="Caseload by status" icon="ti-chart-donut" subtitle="32 open cases">
                <PanelBody>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {CASELOAD.map(([label, pct, swatch], i) => (
                      <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8,
                        fontSize: 13, padding: '7px 0',
                        borderBottom: i < CASELOAD.length - 1 ? '1px solid var(--ht-inset)' : 'none' }}>
                        <span style={{ width: 10, height: 10, borderRadius: 3, background: swatch }} />
                        {label}
                        <span style={{ marginLeft: 'auto', fontWeight: 500,
                                       fontVariantNumeric: 'tabular-nums' }}>{pct}</span>
                      </div>
                    ))}
                  </div>
                </PanelBody>
              </Panel>
            </div>
          </main>
        </div>
      </div>
    </div>
  ),
};
