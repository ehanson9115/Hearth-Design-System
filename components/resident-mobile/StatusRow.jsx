import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'status-row');
  el.textContent = `
.ht-statusrow{display:flex;align-items:center;gap:12px;padding:13px 0;font-family:var(--ht-font-sans)}
.ht-statusrow + .ht-statusrow{border-top:1px solid var(--ht-grey-3)}
.ht-statusrow__ic{width:36px;height:36px;border-radius:var(--ht-r-card);flex-shrink:0;display:grid;place-content:center;font-size:17px;background:var(--ht-action-tint);color:var(--ht-action)}
.ht-statusrow__title{font-size:15px;font-weight:500;color:var(--ht-text-head);line-height:1.35;margin:0}
.ht-statusrow__sub{font-size:var(--ht-fs-caption);color:var(--ht-text-muted);line-height:1.35;margin:1px 0 0}
.ht-statusrow__end{margin-left:auto;padding-left:10px;flex-shrink:0}
`;
  document.head.appendChild(el);
}

/**
 * Hearth status row — violet icon tile + title/date + trailing status badge,
 * for training, appointment, and task lists. Stack rows directly — hairlines
 * auto-divide. Pass the badge as a node (usually `Badge`).
 */
export function StatusRow({ icon = 'ti-calendar-check', title, subtitle, badge, onClick, className = '', ...rest }) {
  ensureStyles();
  return (
    <div
      className={['ht-statusrow', className].filter(Boolean).join(' ')}
      onClick={onClick}
      style={onClick ? { cursor: 'pointer' } : undefined}
      {...rest}
    >
      <span className="ht-statusrow__ic"><i className={`ti ${icon}`} aria-hidden="true" /></span>
      <span>
        <h3 className="ht-statusrow__title">{title}</h3>
        {subtitle && <p className="ht-statusrow__sub">{subtitle}</p>}
      </span>
      {badge && <span className="ht-statusrow__end">{badge}</span>}
    </div>
  );
}
