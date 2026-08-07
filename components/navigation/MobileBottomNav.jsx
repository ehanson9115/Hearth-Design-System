import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'bottom-nav');
  el.textContent = `
.ht-bnav{display:grid;background:var(--ht-surface);border-top:1px solid var(--ht-hairline);padding:6px 8px 20px;font-family:var(--ht-font-sans)}
.ht-bnav__item{display:flex;flex-direction:column;align-items:center;gap:3px;padding:8px 4px;min-height:48px;text-decoration:none;font-size:11px;font-weight:500;color:var(--ht-text-muted);position:relative;background:none;border:none;cursor:pointer;font-family:inherit}
.ht-bnav__item i{font-size:21px}
.ht-bnav__item.is-active{color:var(--ht-action)}
.ht-bnav__badge{position:absolute;top:4px;right:calc(50% - 18px);min-width:16px;height:16px;border-radius:999px;background:var(--ht-red-vivid);color:#fff;font-size:10px;font-weight:500;display:grid;place-content:center;padding:0 4px}
`;
  document.head.appendChild(el);
}

/**
 * Hearth mobile bottom nav — 48px targets, labels always visible (never
 * icon-only). Active item goes violet. items: [{label, icon, active, badge, href}].
 */
export function MobileBottomNav({ items = [], className = '', ...rest }) {
  ensureStyles();
  return (
    <nav className={['ht-bnav', className].filter(Boolean).join(' ')}
      style={{ gridTemplateColumns: `repeat(${items.length || 1}, 1fr)` }} {...rest}>
      {items.map((it, i) => {
        const Tag = it.href ? 'a' : 'button';
        return (
          <Tag key={i} href={it.href} onClick={it.onClick} type={it.href ? undefined : 'button'}
            className={['ht-bnav__item', it.active ? 'is-active' : ''].filter(Boolean).join(' ')}
            aria-current={it.active ? 'page' : undefined}>
            {it.badge != null && <span className="ht-bnav__badge">{it.badge}</span>}
            <i className={`ti ${it.icon}`} aria-hidden="true" />
            {it.label}
          </Tag>
        );
      })}
    </nav>
  );
}
