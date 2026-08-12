import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'eyebrow');
  el.textContent = `
.ht-eyebrow{display:block;font-family:var(--ht-font-sans);font-size:10.5px;font-weight:500;letter-spacing:0.07em;text-transform:uppercase;color:var(--ht-text-muted)}
.ht-eyebrow--card{font-size:10.5px;font-weight:500}
`;
  document.head.appendChild(el);
}

/**
 * Hearth eyebrow — the tiny uppercase section label. All eyebrows render
 * 10.5px/500/+0.07em (unified 2026-08-12); `level` is kept for API
 * compatibility and no longer changes size.
 */
export function Eyebrow({ level = 'page', as = 'div', children, className = '', ...rest }) {
  ensureStyles();
  const Tag = as;
  const cls = ['ht-eyebrow', level === 'card' ? 'ht-eyebrow--card' : '', className].filter(Boolean).join(' ');
  return (
    <Tag className={cls} {...rest}>{children}</Tag>
  );
}
