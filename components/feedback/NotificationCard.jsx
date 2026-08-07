import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'notification-card');
  el.textContent = `
.ht-alert{display:grid;grid-template-columns:20px 1fr;gap:8px;padding:12px 16px;border-radius:var(--ht-r-input);border:1px solid;font-family:var(--ht-font-sans);font-size:14px;line-height:1.4}
.ht-alert__t{font-weight:500;font-size:15px}
.ht-alert__d{font-weight:400;color:color-mix(in srgb,currentColor 78%,var(--ht-text-muted))}
.ht-alert > i{font-size:18px;margin-top:1px}
.ht-alert--info{background:var(--ht-action-wash);border-color:var(--ht-action);color:var(--ht-primary-dark)}
.ht-alert--info > i{color:var(--ht-action)}
.ht-alert--success{background:var(--ht-green-wash);border-color:var(--ht-green-vivid);color:var(--ht-green-text)}
.ht-alert--success > i{color:var(--ht-green-vivid)}
.ht-alert--warning{background:var(--ht-amber-wash);border-color:var(--ht-amber-vivid);color:var(--ht-amber-text)}
.ht-alert--warning > i{color:var(--ht-amber-icon)}
.ht-alert--danger{background:var(--ht-red-wash);border-color:var(--ht-red-vivid);color:var(--ht-red-text)}
.ht-alert--danger > i{color:var(--ht-red-vivid)}
.ht-alert--compact{padding:8px 12px;font-size:13px;gap:7px;grid-template-columns:17px 1fr}
.ht-alert--compact .ht-alert__t{font-size:14px}
.ht-alert--compact > i{font-size:15px}
`;
  document.head.appendChild(el);
}

const DEFAULT_ICON = {
  info: 'ti-info-circle',
  success: 'ti-circle-check',
  warning: 'ti-alert-triangle',
  danger: 'ti-circle-x',
};

/**
 * Hearth notification card (inline alert). Outlined: the saturated hue is the
 * 1px stroke, the fill is a near-white wash, and the icon + AA text carry the
 * meaning. `info` is brand violet (royal stays reserved for data). Use
 * `compact` for dense admin screens — it only tightens the box.
 */
export function NotificationCard({
  variant = 'info',
  title,
  children,
  icon,
  compact = false,
  className = '',
  ...rest
}) {
  ensureStyles();
  const iconClass = icon || DEFAULT_ICON[variant];
  const cls = [
    'ht-alert',
    `ht-alert--${variant}`,
    compact ? 'ht-alert--compact' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <div className={cls} role="status" {...rest}>
      <i className={`ti ${iconClass}`} aria-hidden="true" />
      <span>
        {title && <span className="ht-alert__t">{title}</span>}
        {title && children && <br />}
        {children && <span className="ht-alert__d">{children}</span>}
      </span>
    </div>
  );
}
