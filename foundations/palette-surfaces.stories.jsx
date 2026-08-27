import React from 'react';
export default {
  title: 'Foundations/Palette Surfaces',
};

const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 14 };
const swStyle = {
  border: '1px solid var(--ht-hairline)',
  borderRadius: 8,
  overflow: 'hidden',
  background: '#fff',
};
const chipStyle = { height: 44 };
const metaStyle = { padding: '6px 9px', fontSize: 10.5, color: 'var(--ht-text-muted)' };
const metaB = { display: 'block', fontSize: 11.5, color: 'var(--ht-text-head)', fontWeight: 500 };

const swatches = [
  { varName: '--ht-bg', hex: '#F8F7FC page' },
  { varName: '--ht-hairline', hex: '#E4E4EC' },
  { varName: '--ht-border', hex: '#D6D5E0' },
  { varName: '--ht-ink-surface', hex: '#201C33' },
];

// Named to match the title's last segment so Storybook hoists this to a
// single sidebar item instead of a nested Component > Story pair.
export const PaletteSurfaces = {
  render: () => (
    <div style={{ padding: 18, background: 'var(--ht-bg)', fontFamily: 'var(--ht-font-sans)' }}>
      <div style={gridStyle}>
        {swatches.map((s) => (
          <div key={s.varName} style={swStyle}>
            <div style={{ ...chipStyle, background: `var(${s.varName})` }} />
            <div style={metaStyle}>
              <b style={metaB}>{s.varName}</b>
              {s.hex}
            </div>
          </div>
        ))}
      </div>
      <div>
        <div style={{ padding: '3px 0', lineHeight: 1.3, color: 'var(--ht-text-head)', fontSize: 16, fontWeight: 500 }}>
          --ht-text-head · #14111F · headings
        </div>
        <div style={{ padding: '3px 0', lineHeight: 1.3, color: 'var(--ht-text)', fontSize: 14 }}>
          --ht-text · #1D1A2E · body
        </div>
        <div style={{ padding: '3px 0', lineHeight: 1.3, color: 'var(--ht-text-on-tint)', fontSize: 14 }}>
          --ht-text-on-tint · #52525E · labels on a grey/tinted fill (AA there; muted is not)
        </div>
        <div style={{ padding: '3px 0', lineHeight: 1.3, color: 'var(--ht-text-muted)', fontSize: 14 }}>
          --ht-text-muted · #6B7280 · secondary
        </div>
        <div style={{ padding: '3px 0', lineHeight: 1.3, color: 'var(--ht-text-subtle)', fontSize: 14 }}>
          --ht-text-subtle · #9CA3AF · placeholder / timestamps
        </div>
      </div>
    </div>
  ),
};
