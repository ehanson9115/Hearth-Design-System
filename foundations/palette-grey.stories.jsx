import React from 'react';
export default {
  title: 'Foundations/Palette Grey',
};

const swStyle = {
  border: '1px solid var(--ht-hairline)',
  borderRadius: 8,
  overflow: 'hidden',
  background: '#fff',
};
const chipStyle = { height: 58 };
const metaStyle = { padding: '7px 9px', fontSize: 10.5, color: 'var(--ht-text-muted)' };
const metaB = { display: 'block', fontSize: 11.5, color: 'var(--ht-text-head)', fontWeight: 500 };
const useStyle = { fontSize: 10, color: 'var(--ht-text-subtle)', marginTop: 2 };
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 10 };

const steps = [
  { name: 'grey-0', varName: '--ht-grey-0', hex: '#FFFFFF', use: 'card' },
  { name: 'grey-1', varName: '--ht-grey-1', hex: '#FAFAFC', use: 'header/input' },
  { name: 'grey-2', varName: '--ht-grey-2', hex: '#F5F5F9', use: 'sidebar' },
  { name: 'grey-3', varName: '--ht-grey-3', hex: '#ECECF2', use: 'divider' },
  { name: 'grey-4', varName: '--ht-grey-4', hex: '#E4E4EC', use: 'hairline' },
  { name: 'grey-5', varName: '--ht-grey-5', hex: '#DBDAE5', use: 'pressed' },
];

// Named to match the title's last segment so Storybook hoists this to a
// single sidebar item instead of a nested Component > Story pair.
export const PaletteGrey = {
  render: () => (
    <div style={{ padding: 18, background: 'var(--ht-bg)', fontFamily: 'var(--ht-font-sans)' }}>
      <div style={gridStyle}>
        {steps.map((s) => (
          <div key={s.name} style={swStyle}>
            <div style={{ ...chipStyle, background: `var(${s.varName})` }} />
            <div style={metaStyle}>
              <b style={metaB}>{s.name}</b>
              {s.hex}
              <div style={useStyle}>{s.use}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
