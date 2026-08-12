import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'button');
  el.textContent = `
.ht-btn{display:inline-flex;align-items:center;justify-content:center;gap:7px;font-family:var(--ht-font-sans);font-weight:500;letter-spacing:0.01em;border:1px solid transparent;border-radius:var(--ht-r-card);cursor:pointer;transition:background 140ms,box-shadow 140ms,color 140ms;white-space:nowrap;text-decoration:none}
.ht-btn:focus-visible{outline:none;box-shadow:var(--ht-ring) var(--ht-ring-color)}
.ht-btn[disabled]{opacity:.5;cursor:not-allowed}
.ht-btn--md{font-size:14px;padding:10px 18px;min-height:44px}
.ht-btn--desktop{font-size:14px;padding:8px 16px;min-height:38px}
.ht-btn--sm{font-size:13px;padding:8px 14px;border-radius:var(--ht-r-card)}
.ht-btn--full{width:100%}
.ht-btn i{font-size:1.12em;line-height:1}
.ht-btn--primary{background:var(--ht-action);color:#fff}
.ht-btn--primary:hover:not([disabled]){background:var(--ht-action-hover)}
.ht-btn--primary:active:not([disabled]){background:var(--ht-primary-dark)}
.ht-btn--secondary{background:var(--ht-surface);color:var(--ht-action);border-color:color-mix(in srgb, var(--ht-action) 32%, white);border-width:1.5px}
.ht-btn--secondary:hover:not([disabled]){background:var(--ht-grey-1)}
.ht-btn--tint{background:var(--ht-action-tint);color:var(--ht-action)}
.ht-btn--tint:hover:not([disabled]){background:var(--ht-action-select)}
.ht-btn--danger{background:var(--ht-surface);color:var(--ht-red-text);border-color:var(--ht-red-line);border-width:1.5px}
.ht-btn--danger:hover:not([disabled]){background:var(--ht-red-soft)}
.ht-btn--danger:focus-visible{box-shadow:var(--ht-ring) var(--ht-ring-color-danger)}
.ht-btn--ghost{background:rgba(255,255,255,0.12);color:var(--ht-on-ink);border-color:rgba(255,255,255,0.25)}
.ht-btn--ghost:hover:not([disabled]){background:rgba(255,255,255,0.2)}
.ht-btn--link{background:none;padding:0;min-height:0;font-size:13px;color:var(--ht-data-text);text-decoration:underline;text-underline-offset:3px;border-radius:4px}
.ht-btn--link:hover:not([disabled]){color:var(--ht-primary-dark)}
`;
  document.head.appendChild(el);
}

/**
 * Hearth primary interactive control. Medium weight only — color and shape
 * carry emphasis, never a heavier weight. One `primary` per view.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  fullWidth = false,
  disabled = false,
  type = 'button',
  href,
  children,
  className = '',
  ...rest
}) {
  ensureStyles();
  const cls = [
    'ht-btn',
    `ht-btn--${variant}`,
    variant === 'link' ? '' : `ht-btn--${size}`,
    fullWidth ? 'ht-btn--full' : '',
    className,
  ].filter(Boolean).join(' ');

  const inner = (
    <>
      {icon && <i className={`ti ${icon}`} aria-hidden="true" />}
      {children && <span>{children}</span>}
      {iconRight && <i className={`ti ${iconRight}`} aria-hidden="true" />}
    </>
  );

  if (href && !disabled) {
    return <a href={href} className={cls} {...rest}>{inner}</a>;
  }
  return (
    <button type={type} className={cls} disabled={disabled} {...rest}>{inner}</button>
  );
}
