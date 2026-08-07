import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'pill');
  el.textContent = `
.ht-pill{font-family:var(--ht-font-sans);font-size:13px;font-weight:500;padding:8px 16px;border-radius:999px;color:var(--ht-text-muted);background:none;border:none;cursor:pointer;transition:background 140ms,color 140ms}
.ht-pill:hover{color:var(--ht-text-head)}
.ht-pill.is-active{background:var(--ht-action-select);color:var(--ht-primary-dark);font-weight:500}
.ht-pill:focus-visible{outline:none;box-shadow:var(--ht-ring) var(--ht-ring-color)}
`;
  document.head.appendChild(el);
}

/**
 * Hearth nav pill — a single tab-style filter pill. Compose several in a row;
 * mark the current one `active`.
 */
export function Pill({ active = false, as = 'button', children, className = '', ...rest }) {
  ensureStyles();
  const Tag = as;
  const cls = ['ht-pill', active ? 'is-active' : '', className].filter(Boolean).join(' ');
  const extra = Tag === 'button' ? { type: 'button' } : {};
  return <Tag className={cls} aria-current={active ? 'page' : undefined} {...extra} {...rest}>{children}</Tag>;
}
