import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'side-nav');
  el.textContent = `
.ht-sidenav{box-sizing:border-box;background:var(--ht-sidebar-bg);border-right:1px solid var(--ht-border);padding:14px 10px;font-family:var(--ht-font-sans);display:flex;flex-direction:column}
.ht-sidenav__group + .ht-sidenav__group{margin-top:16px}
.ht-sidenav__label{font-size:11px;font-weight:500;letter-spacing:0.07em;text-transform:uppercase;color:var(--ht-text-muted);padding:0 8px;margin:0 0 6px}
.ht-sidenav__item{display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:var(--ht-r-input);font-size:13px;line-height:1.35;color:var(--ht-text);width:100%;background:none;border:0;font-family:inherit;text-align:left;cursor:pointer;text-decoration:none;transition:background 120ms}
.ht-sidenav__item + .ht-sidenav__item{margin-top:2px}
.ht-sidenav__item:hover:not(.is-active){background:var(--ht-grey-3)}
.ht-sidenav__item.is-active{background:var(--ht-action-select);color:var(--ht-primary-dark);font-weight:500}
.ht-sidenav__item:focus-visible{outline:none;box-shadow:var(--ht-ring) var(--ht-ring-color)}
.ht-sidenav__item i{font-size:15px;flex-shrink:0}
.ht-sidenav__txt{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ht-sidenav__meta{margin-left:auto;padding-left:8px;font-size:12px;color:var(--ht-text-muted);font-variant-numeric:tabular-nums;flex-shrink:0}
.ht-sidenav__item.is-active .ht-sidenav__meta{color:var(--ht-action)}
.ht-sidenav__footer{margin-top:22px}
`;
  document.head.appendChild(el);
}

/**
 * Hearth admin side navigation — the caseworker rail. Labelled groups of
 * icon + label rows with an optional trailing count or time, one active row
 * in the action-select tint. Sits between DarkHeader and the main column.
 */
export function SideNav({ groups = [], width = 220, footer, children, className = '', style, ...rest }) {
  ensureStyles();
  return (
    <aside
      className={['ht-sidenav', className].filter(Boolean).join(' ')}
      style={{ width: typeof width === 'number' ? width + 'px' : width, ...style }}
      {...rest}
    >
      {groups.map((g, gi) => (
        <nav className="ht-sidenav__group" key={gi} aria-label={typeof g.label === 'string' ? g.label : undefined}>
          {g.label && <p className="ht-sidenav__label">{g.label}</p>}
          {(g.items || []).map((it, i) => {
            const Tag = it.href ? 'a' : 'button';
            return (
              <Tag
                key={i}
                className={['ht-sidenav__item', it.active ? 'is-active' : ''].filter(Boolean).join(' ')}
                href={it.href}
                type={it.href ? undefined : 'button'}
                aria-current={it.active ? 'page' : undefined}
                onClick={it.onClick}
              >
                {it.icon && <i className={'ti ' + it.icon} aria-hidden="true" />}
                <span className="ht-sidenav__txt">{it.label}</span>
                {it.meta != null && <span className="ht-sidenav__meta">{it.meta}</span>}
              </Tag>
            );
          })}
        </nav>
      ))}
      {(footer || children) && <div className="ht-sidenav__footer">{footer || children}</div>}
    </aside>
  );
}
