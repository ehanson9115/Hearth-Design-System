import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'avatar');
  el.textContent = `
.ht-avatar{border-radius:999px;background:var(--ht-data-mid);color:var(--ht-data-text);font-family:var(--ht-font-sans);font-weight:500;display:grid;place-content:center;flex-shrink:0;overflow:hidden}
.ht-avatar img{width:100%;height:100%;object-fit:cover}
.ht-avatar--sm{width:24px;height:24px;font-size:10px}
.ht-avatar--md{width:28px;height:28px;font-size:11px}
.ht-avatar--lg{width:36px;height:36px;font-size:13px}
`;
  document.head.appendChild(el);
}

function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0] || '').join('').toUpperCase();
}

/**
 * Hearth avatar — royal-tinted initials chip (or an image). Used in activity
 * rows, tables, and transcripts.
 */
export function Avatar({ name = '', src, size = 'md', className = '', ...rest }) {
  ensureStyles();
  return (
    <span className={['ht-avatar', `ht-avatar--${size}`, className].filter(Boolean).join(' ')} {...rest}>
      {src ? <img src={src} alt={name} /> : initials(name)}
    </span>
  );
}
