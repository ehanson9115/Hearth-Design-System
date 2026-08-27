import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'metric-card');
  el.textContent = `
.ht-metric{background:var(--ht-surface);border:1px solid var(--ht-hairline);border-radius:var(--ht-r-card);padding:18px 20px;font-family:var(--ht-font-sans);box-shadow:var(--ht-shadow-sm)}
.ht-metric__n{font-size:26px;font-weight:500;letter-spacing:-0.01em;color:var(--ht-text-head);font-variant-numeric:tabular-nums;line-height:1.1;display:flex;align-items:baseline;gap:6px}
.ht-metric--warn .ht-metric__n{color:#B45309}
.ht-metric__trend{font-size:13px;font-weight:500}
.ht-metric__trend--up{color:var(--ht-green-text)}
.ht-metric__trend--down{color:var(--ht-red-text)}
.ht-metric__label{font-size:12.5px;color:var(--ht-text-muted);margin-top:4px}
`;
  document.head.appendChild(el);
}

/**
 * Hearth metric card — the glance layer. Big tabular number + quiet label,
 * optional trend. `warn` tints the number amber-brown. Numbers use data
 * context (tabular figures), never a status color for the value itself.
 */
export function MetricCard({ value, label, trend, trendDir = 'up', variant = 'default', className = '', ...rest }) {
  ensureStyles();
  return (
    <div className={['ht-metric', variant === 'warn' ? 'ht-metric--warn' : '', className].filter(Boolean).join(' ')} {...rest}>
      <div className="ht-metric__n">
        {value}
        {trend != null && <span className={`ht-metric__trend ht-metric__trend--${trendDir}`}>{trendDir === 'up' ? '▲' : '▼'} {trend}</span>}
      </div>
      {label && <div className="ht-metric__label">{label}</div>}
    </div>
  );
}
