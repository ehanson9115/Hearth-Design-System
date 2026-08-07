import React from 'react';
import { Avatar } from '../core/Avatar.jsx';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'activity-list');
  el.textContent = `
.ht-act{font-family:var(--ht-font-sans)}
.ht-act__row{display:flex;gap:10px;align-items:center;padding:15px 0;border-bottom:1px solid var(--ht-grey-3);font-size:13px}
.ht-act__row:last-child{border-bottom:none}
.ht-act__text{flex:1}
.ht-act__text b{font-weight:500;color:var(--ht-text-head)}
.ht-act__when{margin-left:auto;font-size:12px;color:var(--ht-text-subtle);white-space:nowrap}
`;
  document.head.appendChild(el);
}

/**
 * Hearth activity list — avatar + event line + quiet timestamp, optional
 * trailing badge. items: [{name, text, when, badge}].
 */
export function ActivityList({ items = [], className = '', children, ...rest }) {
  ensureStyles();
  return (
    <div className={['ht-act', className].filter(Boolean).join(' ')} {...rest}>
      {children || items.map((it, i) => (
        <div className="ht-act__row" key={i}>
          <Avatar name={it.name} />
          <span className="ht-act__text"><b>{it.name}</b>{it.text ? ` — ${it.text}` : ''}</span>
          {it.badge}
          {it.when && <span className="ht-act__when">{it.when}</span>}
        </div>
      ))}
    </div>
  );
}
