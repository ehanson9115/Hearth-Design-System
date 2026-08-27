import React from 'react';
export default {
  title: 'Foundations/Type Scale',
};

const rowStyle = { display: 'flex', alignItems: 'baseline', gap: 16, padding: '5px 0' };
const tmStyle = { fontSize: 11.5, color: 'var(--ht-text-muted)', minWidth: 96, fontVariantNumeric: 'tabular-nums' };

const rows = [
  { tm: '28 / 500', size: 28, weight: 500, ls: '-0.015em', color: 'var(--ht-text-head)', label: 'Dashboard greeting' },
  { tm: '22 / 500', size: 22, weight: 500, ls: '-0.005em', color: 'var(--ht-text-head)', label: 'Hero on dark (optical)' },
  { tm: '20 / 500', size: 20, weight: 500, ls: '-0.01em', color: 'var(--ht-text-head)', label: 'Page / step title' },
  { tm: '15 / 500', size: 15, weight: 500, color: 'var(--ht-text-head)', label: 'Card headline' },
  { tm: '14.5 / 500', size: 14.5, weight: 500, color: 'var(--ht-text-head)', label: 'Label / button' },
  { tm: '14 / 400', size: 14, weight: 400, color: 'var(--ht-text)', label: 'Body and subcopy text' },
  { tm: '12.5 / 400', size: 12.5, weight: 400, color: 'var(--ht-text-muted)', label: 'Card subtitle / hint' },
  {
    tm: '10.5 / 500',
    size: 10.5,
    weight: 500,
    ls: '0.07em',
    color: 'var(--ht-text-muted)',
    label: 'SUB-SECTION CAPS (INSIDE CARDS ONLY)',
  },
];

// Named to match the title's last segment so Storybook hoists this to a
// single sidebar item instead of a nested Component > Story pair.
export const TypeScale = {
  render: () => (
    <div style={{ padding: '20px 22px', background: 'var(--ht-bg)', fontFamily: 'var(--ht-font-sans)' }}>
      {rows.map((r) => (
        <div key={r.tm} style={rowStyle}>
          <span style={tmStyle}>{r.tm}</span>
          <span style={{ fontSize: r.size, fontWeight: r.weight, letterSpacing: r.ls, color: r.color }}>
            {r.label}
          </span>
        </div>
      ))}
    </div>
  ),
};
