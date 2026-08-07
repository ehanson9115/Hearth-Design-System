import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'highlight-card');
  el.textContent = `
.ht-hlcard{background:var(--ht-surface);border:1px solid var(--ht-action);border-radius:var(--ht-r-block);padding:14px 12px 12px;font-family:var(--ht-font-sans)}
.ht-hlcard__title{display:flex;align-items:center;gap:7px;font-size:13.5px;font-weight:500;color:var(--ht-action);padding:0 4px 10px}
.ht-hlcard__item{display:flex;align-items:center;gap:8px;background:var(--ht-grey-1);border:1px solid var(--ht-grey-3);border-radius:var(--ht-r-card);padding:9px 12px;font-size:12.5px;font-weight:500;color:var(--ht-text);margin-bottom:7px;cursor:pointer;text-decoration:none;transition:background 140ms,border-color 140ms}
.ht-hlcard__item:last-child{margin-bottom:0}
.ht-hlcard__item:hover{background:var(--ht-action-tint);border-color:#E0D3F8}
.ht-hlcard__arr{margin-left:auto;font-size:15px;color:var(--ht-action);font-weight:500}
`;
  document.head.appendChild(el);
}

/**
 * Hearth highlight card — the "What's new" promo pattern: white card with a
 * violet stroke and soft rounded item rows. items: [{label, onClick|href}].
 */
export function HighlightCard({ title = "What's new", icon = 'ti-wand', items = [], className = '', children, ...rest }) {
  ensureStyles();
  return (
    <div className={['ht-hlcard', className].filter(Boolean).join(' ')} {...rest}>
      <div className="ht-hlcard__title"><i className={`ti ${icon}`} aria-hidden="true" style={{ fontSize: 15 }} />{title}</div>
      {children || items.map((it, i) => {
        const Tag = it.href ? 'a' : 'div';
        return (
          <Tag key={i} className="ht-hlcard__item" href={it.href} onClick={it.onClick}>
            {it.label}<span className="ht-hlcard__arr" aria-hidden="true">→</span>
          </Tag>
        );
      })}
    </div>
  );
}
