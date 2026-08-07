import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'toast');
  el.textContent = `
.ht-toast{display:inline-flex;align-items:center;gap:7px;padding:12px 16px;border-radius:var(--ht-r-block);background:var(--ht-ink-surface);color:var(--ht-on-ink);font-family:var(--ht-font-sans);font-size:13.5px;font-weight:500;line-height:1.35;box-shadow:var(--ht-shadow-lg)}
.ht-toast__check{flex-shrink:0;display:grid;place-content:center;color:#3DD68C}
`;
  document.head.appendChild(el);
}

const Tick = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
    <path d="M2.5 7 L5.2 9.7 L10.5 3.6" stroke="currentColor" strokeWidth="1.625" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Hearth toast — a brief ink-surface confirmation ("Document uploaded").
 * The check is the on-ink success green (#3DD68C — vivid green reads muddy
 * on ink). Renders in-flow; position it fixed near the bottom in an app.
 */
export function Toast({ check = true, children, className = '', ...rest }) {
  ensureStyles();
  return (
    <div className={['ht-toast', className].filter(Boolean).join(' ')} role="status" {...rest}>
      {check && <span className="ht-toast__check"><Tick /></span>}
      {children}
    </div>
  );
}
