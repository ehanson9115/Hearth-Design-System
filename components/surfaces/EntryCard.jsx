import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'entry-card');
  el.textContent = `
.ht-entry{display:flex;align-items:center;gap:12px;padding:14px 18px;border-radius:var(--ht-r-block);background:var(--ht-action-tint);border:1px solid color-mix(in srgb, var(--ht-action) 32%, white);cursor:pointer;font-family:var(--ht-font-sans);text-decoration:none;transition:background 150ms}
.ht-entry:hover{background:var(--ht-action-select)}
.ht-entry__ic{width:32px;height:32px;border-radius:999px;background:var(--ht-surface);color:var(--ht-action);display:grid;place-content:center;font-size:15px;flex-shrink:0}
.ht-entry__title{font-size:15px;font-weight:500;color:var(--ht-text-head);line-height:1.35;margin:0}
.ht-entry__sub{font-size:13px;font-weight:400;color:var(--ht-text-muted);line-height:1.35;margin:1px 0 0}
.ht-entry__arrow{margin-left:auto;padding-left:10px;font-size:17px;font-weight:500;color:var(--ht-action);flex-shrink:0}
`;
  document.head.appendChild(el);
}

/**
 * Hearth entry card — a violet-tint doorway into a flow ("Recertification —
 * your certification ends July 12"). White icon circle, title + quiet
 * subtitle, trailing arrow. The tint marks it as an invitation, not status.
 */
export function EntryCard({ icon = 'ti-calendar-repeat', title, subtitle, href, onClick, className = '', ...rest }) {
  ensureStyles();
  const Tag = href ? 'a' : 'div';
  return (
    <Tag
      className={['ht-entry', className].filter(Boolean).join(' ')}
      href={href}
      onClick={onClick}
      role={href ? undefined : 'button'}
      tabIndex={href ? undefined : 0}
      {...rest}
    >
      <span className="ht-entry__ic"><i className={`ti ${icon}`} aria-hidden="true" /></span>
      <span>
        <h3 className="ht-entry__title">{title}</h3>
        {subtitle && <p className="ht-entry__sub">{subtitle}</p>}
      </span>
      <span className="ht-entry__arrow" aria-hidden="true">→</span>
    </Tag>
  );
}
