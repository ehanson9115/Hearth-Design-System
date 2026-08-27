import React from 'react';
export default {
  title: 'Foundations/Palette Status',
};

const rowStyle = {
  display: 'grid',
  gridTemplateColumns: '88px 1fr',
  alignItems: 'center',
  gap: 12,
  marginBottom: 10,
};
const nmStyle = { fontSize: 12.5, fontWeight: 500, color: 'var(--ht-text-head)' };
const nmSpan = { display: 'block', fontSize: 11, color: 'var(--ht-text-muted)', fontWeight: 400 };
const chipsStyle = { display: 'flex', gap: 8 };
const chipStyle = {
  flex: 1,
  border: '1px solid var(--ht-hairline)',
  borderRadius: 7,
  overflow: 'hidden',
  background: '#fff',
};
const chipC = { height: 34 };
const chipT = { padding: '4px 8px', fontSize: 10, color: 'var(--ht-text-muted)' };

const Row = ({ name, sub, chips }) => (
  <div style={rowStyle}>
    <div style={nmStyle}>
      {name}
      <span style={nmSpan}>{sub}</span>
    </div>
    <div style={chipsStyle}>
      {chips.map(([bg, label]) => (
        <div key={label} style={chipStyle}>
          <div style={{ ...chipC, background: bg }} />
          <div style={chipT}>{label}</div>
        </div>
      ))}
    </div>
  </div>
);

// Named to match the title's last segment so Storybook hoists this to a
// single sidebar item instead of a nested Component > Story pair.
export const PaletteStatus = {
  render: () => (
    <div style={{ padding: 18, background: 'var(--ht-bg)', fontFamily: 'var(--ht-font-sans)' }}>
      <Row
        name="Success"
        sub="green"
        chips={[
          ['var(--ht-green-vivid)', 'vivid · stroke'],
          ['var(--ht-green-text)', 'text'],
          ['var(--ht-green-wash)', 'wash · card'],
          ['var(--ht-green-bg)', 'bg · badge'],
          ['var(--ht-green-line)', 'line'],
        ]}
      />
      <Row
        name="Warning"
        sub="sunflower"
        chips={[
          ['var(--ht-amber-vivid)', 'vivid · stroke'],
          ['var(--ht-amber-text)', 'text'],
          ['var(--ht-amber-wash)', 'wash · card'],
          ['var(--ht-amber-bg)', 'bg · badge'],
          ['var(--ht-amber-line)', 'line'],
        ]}
      />
      <Row
        name="Danger"
        sub="red"
        chips={[
          ['var(--ht-red-vivid)', 'vivid · stroke'],
          ['var(--ht-red-text)', 'text'],
          ['var(--ht-red-wash)', 'wash · card'],
          ['var(--ht-red-bg)', 'bg · badge'],
          ['var(--ht-red-line)', 'line'],
        ]}
      />
      <Row
        name="Info"
        sub="= primary"
        chips={[
          ['var(--ht-action)', 'action · stroke'],
          ['var(--ht-action-hover)', 'text'],
          ['var(--ht-action-wash)', 'wash · card'],
          ['var(--ht-action-tint)', 'tint · badge'],
          ['var(--ht-action-select)', 'select'],
        ]}
      />
      <p
        style={{
          margin: '12px 0 0',
          fontSize: 11.5,
          color: 'var(--ht-text-muted)',
          borderTop: '1px solid var(--ht-hairline)',
          paddingTop: 10,
        }}
      >
        The info row is not a fourth hue; every step is derived from{' '}
        <b style={{ fontWeight: 500, color: 'var(--ht-text-head)' }}>--ht-primary</b> by{' '}
        <code>color-mix</code>, so a product that re-points primary to blue gets a blue info card,
        blue selected states and a blue focus ring with no other edits.
      </p>
    </div>
  ),
};
