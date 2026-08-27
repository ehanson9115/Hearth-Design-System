import React from 'react';
export default {
  title: 'Foundations/Palette Brand',
};

const swStyle = {
  border: '1px solid var(--ht-hairline)',
  borderRadius: 8,
  overflow: 'hidden',
  background: '#fff',
};
const chipStyle = { height: 52 };
const metaStyle = { padding: '7px 10px', fontSize: 11, color: 'var(--ht-text-muted)' };
const metaB = { display: 'block', fontSize: 12, color: 'var(--ht-text-head)', fontWeight: 500 };
const lblStyle = {
  fontSize: 10.5,
  fontWeight: 500,
  letterSpacing: '0.07em',
  textTransform: 'uppercase',
  color: 'var(--ht-text-muted)',
  margin: '0 0 8px',
};
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 };

const Swatch = ({ varName, hex, bg }) => (
  <div style={swStyle}>
    <div style={{ ...chipStyle, background: bg }} />
    <div style={metaStyle}>
      <b style={metaB}>{varName}</b>
      {hex}
    </div>
  </div>
);

// Named to match the title's last segment so Storybook hoists this to a
// single sidebar item instead of a nested Component > Story pair.
export const PaletteBrand = {
  render: () => (
    <div style={{ padding: 18, background: 'var(--ht-bg)', fontFamily: 'var(--ht-font-sans)' }}>
      <p style={lblStyle}>Action · violet</p>
      <div style={{ ...gridStyle, marginBottom: 12 }}>
        <Swatch varName="--ht-action" hex="#4C1EA8" bg="var(--ht-action)" />
        <Swatch varName="--ht-action-hover" hex="#3B1683" bg="var(--ht-action-hover)" />
        <Swatch varName="--ht-action-tint" hex="primary @ 12%" bg="var(--ht-action-tint)" />
        <Swatch varName="--ht-action-select" hex="primary @ 18%" bg="var(--ht-action-select)" />
      </div>
      <p style={lblStyle}>Data · royal</p>
      <div style={gridStyle}>
        <Swatch varName="--ht-data" hex="#4860FC" bg="var(--ht-data)" />
        <Swatch varName="--ht-data-text" hex="#2C3ECF" bg="var(--ht-data-text)" />
        <Swatch varName="--ht-data-tint" hex="#EEF0FE" bg="var(--ht-data-tint)" />
        <Swatch varName="--ht-data-mid" hex="#DDE2FD" bg="var(--ht-data-mid)" />
      </div>
    </div>
  ),
};
