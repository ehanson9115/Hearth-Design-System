import React from 'react';
export default {
  title: 'Foundations/Radii',
};

const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 };
const rStyle = { textAlign: 'center' };
const boxStyle = { height: 66, background: '#fff', border: '1px solid var(--ht-border)' };
const nmStyle = { fontSize: 12, color: 'var(--ht-text-head)', fontWeight: 500, marginTop: 8 };
const useStyle = { fontSize: 11, color: 'var(--ht-text-muted)', marginTop: 1 };

const radii = [
  { varName: '--ht-r-chip', label: '4px · --ht-r-chip', use: 'status chips' },
  { varName: '--ht-r-input', label: '6px · --ht-r-input', use: 'controls, option cards, alerts' },
  { varName: '--ht-r-card', label: '8px · --ht-r-card', use: 'cards, panels, buttons' },
  { varName: '--ht-r-block', label: '12px · --ht-r-block', use: 'editorial, highlight card' },
];

export const Radii = {
  render: () => (
    <div style={{ padding: 20, background: 'var(--ht-bg)', fontFamily: 'var(--ht-font-sans)' }}>
      <div style={gridStyle}>
        {radii.map((r) => (
          <div key={r.varName} style={rStyle}>
            <div style={{ ...boxStyle, borderRadius: `var(${r.varName})` }} />
            <div style={nmStyle}>{r.label}</div>
            <div style={useStyle}>{r.use}</div>
          </div>
        ))}
      </div>
    </div>
  ),
};
