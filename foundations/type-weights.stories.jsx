import React from 'react';
export default {
  title: 'Foundations/Type Weights',
};

const wStyle = { display: 'flex', alignItems: 'baseline', gap: 16, padding: '6px 0' };
const wmStyle = { fontSize: 11.5, color: 'var(--ht-text-muted)', minWidth: 150 };
const wmB = { color: 'var(--ht-text-head)', fontWeight: 500 };

// Named to match the title's last segment so Storybook hoists this to a
// single sidebar item instead of a nested Component > Story pair.
export const TypeWeights = {
  render: () => (
    <div style={{ padding: '20px 22px', background: 'var(--ht-bg)', fontFamily: 'var(--ht-font-sans)' }}>
      <div style={wStyle}>
        <span style={wmStyle}>
          <b style={wmB}>400</b> Regular
        </span>
        <span style={{ fontSize: 19, fontWeight: 400, color: 'var(--ht-text)' }}>
          Body, subcopy, alert descriptions
        </span>
      </div>
      <div style={wStyle}>
        <span style={wmStyle}>
          <b style={wmB}>500</b> Medium
        </span>
        <span style={{ fontSize: 19, fontWeight: 500, color: 'var(--ht-text-head)' }}>
          Headlines, titles, labels, buttons, nav
        </span>
      </div>
      <p
        style={{
          margin: '14px 0 0',
          fontSize: 12.5,
          color: 'var(--ht-text-muted)',
          borderTop: '1px solid var(--ht-hairline)',
          paddingTop: 12,
        }}
      >
        Two weights only; 600 was retired 2026-08-01. A title and a label share weight 500;{' '}
        <b style={{ fontWeight: 500, color: 'var(--ht-text-head)' }}>size, color and tracking</b> carry
        the hierarchy instead. Tracking: +0.01em body · negative on titles · 500 / −0.005em on dark
        surfaces (light text reads optically bolder).
      </p>
    </div>
  ),
};
