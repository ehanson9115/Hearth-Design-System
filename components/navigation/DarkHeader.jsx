import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'dark-header');
  el.textContent = `
.ht-inkhead{background:var(--ht-ink-surface);color:#fff;display:flex;align-items:center;gap:12px;padding:12px 20px;font-family:var(--ht-font-sans)}
.ht-inkhead--rounded{border-radius:var(--ht-r-card)}
.ht-inkhead__logo{width:26px;height:26px;border-radius:var(--ht-r-input);background:var(--ht-action);display:grid;place-content:center;color:#fff;font-size:14px;flex-shrink:0}
.ht-inkhead__name{font-size:14px;font-weight:500}
.ht-inkhead__role{font-size:13px;color:var(--ht-on-ink-subtle)}
.ht-inkhead__nav{margin-left:auto;display:flex;align-items:center;gap:18px}
.ht-inkhead__link{font-size:13px;color:var(--ht-on-ink-muted);text-decoration:none;background:none;border:none;cursor:pointer;font-family:inherit;padding:0}
.ht-inkhead__link:hover,.ht-inkhead__link.is-active{color:#fff}
.ht-inkhead__link.is-active{font-weight:500}
.ht-inkhead__ghost{font-size:13px;font-weight:500;color:#fff;background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.25);border-radius:var(--ht-r-card);padding:6px 14px;cursor:pointer;font-family:inherit}
.ht-inkhead__ghost:hover{background:rgba(255,255,255,0.2)}
`;
  document.head.appendChild(el);
}

/**
 * Hearth admin dark header (violet ink). Admin app only — resident stays
 * light. The logo chip keeps solid violet as the single brand moment;
 * buttons on ink are always ghost, never violet-on-ink. This is one of the
 * screen's ink moments — pair carefully with a live band.
 * nav: [{label, active, href|onClick}].
 */
export function DarkHeader({
  name = 'Healthy Together',
  role,
  logoIcon = 'ti-heart',
  nav = [],
  action,
  onAction,
  rounded = false,
  className = '',
  children,
  ...rest
}) {
  ensureStyles();
  return (
    <header className={['ht-inkhead', rounded ? 'ht-inkhead--rounded' : '', className].filter(Boolean).join(' ')} {...rest}>
      <span className="ht-inkhead__logo"><i className={`ti ${logoIcon}`} aria-hidden="true" /></span>
      <span className="ht-inkhead__name">{name}</span>
      {role && <span className="ht-inkhead__role">{role}</span>}
      <nav className="ht-inkhead__nav">
        {nav.map((n, i) => {
          const Tag = n.href ? 'a' : 'button';
          return (
            <Tag key={i} href={n.href} onClick={n.onClick} type={n.href ? undefined : 'button'}
              className={['ht-inkhead__link', n.active ? 'is-active' : ''].filter(Boolean).join(' ')}
              aria-current={n.active ? 'page' : undefined}>{n.label}</Tag>
          );
        })}
        {action && <button className="ht-inkhead__ghost" type="button" onClick={onAction}>{action}</button>}
        {children}
      </nav>
    </header>
  );
}
