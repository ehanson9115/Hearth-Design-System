import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'activity-card');
  el.textContent = `
.ht-actcard{background:var(--ht-surface);border:1px solid var(--ht-hairline);border-radius:var(--ht-r-block);padding:16px;font-family:var(--ht-font-sans)}
.ht-actcard__head{display:flex;align-items:flex-start;gap:10px}
.ht-actcard__ic{width:24px;height:24px;border-radius:6px;flex-shrink:0;display:grid;place-content:center;font-size:14px;background:var(--ht-grey-2);color:var(--ht-text-muted)}
.ht-actcard__title{font-size:17px;font-weight:500;color:var(--ht-text-head);line-height:1.3;margin:0}
.ht-actcard__sub{font-size:14px;line-height:1.4;color:var(--ht-text-muted);margin:2px 0 0}
.ht-actcard__rule{height:1px;background:var(--ht-grey-3);margin:14px -16px}
.ht-actcard__rows{display:flex;flex-direction:column;gap:10px}
.ht-actcard__row{display:flex;align-items:flex-start;gap:10px;font-size:14.5px;line-height:1.4;color:var(--ht-text)}
.ht-actcard__box{width:16px;height:16px;border-radius:4px;flex-shrink:0;margin-top:2px;background:var(--ht-grey-0);box-shadow:inset 0 0 0 1px var(--ht-border);display:grid;place-content:center;color:transparent}
.ht-actcard__row.is-done .ht-actcard__box{background:var(--ht-green-vivid);box-shadow:none;color:#fff}
.ht-actcard__row.is-done .ht-actcard__label{color:var(--ht-text-muted)}
.ht-actcard__val{margin-left:auto;padding-left:10px;font-size:14.5px;font-weight:500;color:var(--ht-text-head);white-space:nowrap}
`;
  document.head.appendChild(el);
}

const Tick = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2.5 6.5 L5 9 L9.5 3.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Hearth resident reported-activity / checklist card. White card with a
 * title + subtitle header behind a small rounded-square icon chip (20px,
 * r6 — never a large circle), a full-bleed hairline, then 16px checkbox
 * rows. items: [{label, done, value}].
 */
export function ActivityCard({ icon, title, subtitle, items = [], onToggle, children, className = '', ...rest }) {
  ensureStyles();
  return (
    <div className={['ht-actcard', className].filter(Boolean).join(' ')} {...rest}>
      <div className="ht-actcard__head">
        {icon && <span className="ht-actcard__ic"><i className={`ti ${icon}`} aria-hidden="true" /></span>}
        <div>
          {title && <h3 className="ht-actcard__title">{title}</h3>}
          {subtitle && <p className="ht-actcard__sub">{subtitle}</p>}
        </div>
      </div>
      <div className="ht-actcard__rule" />
      {children || (
        <div className="ht-actcard__rows">
          {items.map((it, i) => (
            <div
              key={i}
              className={['ht-actcard__row', it.done ? 'is-done' : ''].filter(Boolean).join(' ')}
              onClick={onToggle && (() => onToggle(i, it))}
              style={onToggle ? { cursor: 'pointer' } : undefined}
            >
              <span className="ht-actcard__box">{it.done ? <Tick /> : null}</span>
              <span className="ht-actcard__label">{it.label}</span>
              {it.value != null && <span className="ht-actcard__val">{it.value}</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
