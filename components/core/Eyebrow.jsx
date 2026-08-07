import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'eyebrow');
  el.textContent = `
.ht-eyebrow{display:block;font-family:var(--ht-font-sans);font-size:13px;font-weight:500;letter-spacing:0.06em;text-transform:uppercase;color:var(--ht-text-muted)}
.ht-eyebrow--card{font-size:10.5px;font-weight:500}
`;
  document.head.appendChild(el);
}

/**
 * Hearth eyebrow — the tiny uppercase section label. `level="page"` (13px)
 * sits above page and section titles; `level="card"` (10.5px) is the only
 * CAPS treatment allowed inside a card.
 */
export function Eyebrow({ level = 'page', as = 'div', children, className = '', ...rest }) {
  ensureStyles();
  const Tag = as;
  const cls = ['ht-eyebrow', level === 'card' ? 'ht-eyebrow--card' : '', className].filter(Boolean).join(' ');
  return (
    <Tag className={cls} {...rest}>{children}</Tag>
  );
}
