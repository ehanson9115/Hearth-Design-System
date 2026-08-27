import React from 'react';
export default {
  title: 'Foundations/Elevation',
};

const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, alignItems: 'center' };
const bStyle = {
  height: 60,
  background: '#fff',
  borderRadius: 'var(--ht-r-card)',
  display: 'grid',
  placeContent: 'center',
  fontSize: 11.5,
  color: 'var(--ht-text-muted)',
};
const nmStyle = { textAlign: 'center', fontSize: 11.5, color: 'var(--ht-text-head)', fontWeight: 500, marginTop: 10 };
const ringStyle = { boxShadow: 'var(--ht-ring) var(--ht-ring-color)', border: '1px solid var(--ht-action)' };

export const Elevation = {
  render: () => (
    <div style={{ padding: '24px 20px', background: 'var(--ht-bg)', fontFamily: 'var(--ht-font-sans)' }}>
      <div style={gridStyle}>
        <div>
          <div style={{ ...bStyle, boxShadow: 'var(--ht-shadow-sm)' }}>sm</div>
          <div style={nmStyle}>--ht-shadow-sm</div>
        </div>
        <div>
          <div style={{ ...bStyle, boxShadow: 'var(--ht-shadow-md)' }}>md</div>
          <div style={nmStyle}>--ht-shadow-md</div>
        </div>
        <div>
          <div style={{ ...bStyle, boxShadow: 'var(--ht-shadow-lg)' }}>lg</div>
          <div style={nmStyle}>--ht-shadow-lg</div>
        </div>
        <div>
          <div style={{ ...bStyle, ...ringStyle }}>focus</div>
          <div style={nmStyle}>--ht-ring</div>
        </div>
      </div>
    </div>
  ),
};
