import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'status-card');
  el.textContent = `
.ht-statuscard{max-width:460px;text-align:center;background:var(--ht-surface);border:1px solid var(--ht-hairline);border-radius:var(--ht-r-card);padding:24px 16px;font-family:var(--ht-font-sans)}
.ht-statuscard__ic{width:36px;height:36px;border-radius:999px;display:grid;place-content:center;font-size:17px;margin:0 auto 8px}
.ht-statuscard__ic--success{background:var(--ht-green-vivid);color:#fff}
.ht-statuscard__ic--empty,.ht-statuscard__ic--error{width:40px;height:40px;background:var(--ht-action-tint);color:var(--ht-action);font-size:19px}
.ht-statuscard__title{font-size:16px;font-weight:500;color:var(--ht-text-head);margin:0}
.ht-statuscard__body{font-size:14px;margin:3px 0 0;color:var(--ht-text-muted);line-height:1.4}
.ht-statuscard__action{margin-top:14px}
.ht-spinner{width:28px;height:28px;margin:0 auto 10px;border-radius:999px;border:3px solid var(--ht-action-tint);border-top-color:var(--ht-action);animation:ht-spin .9s linear infinite}
@keyframes ht-spin{to{transform:rotate(360deg)}}
`;
  document.head.appendChild(el);
}

const ICON = { success: 'ti-check', empty: 'ti-inbox', error: 'ti-alert-circle' };

/**
 * Hearth centered state card — success / loading / empty / error. Centered
 * white card with an invitation-copy body and optional action (a Button node).
 */
export function StatusCard({
  variant = 'empty',
  icon,
  title,
  children,
  action,
  className = '',
  ...rest
}) {
  ensureStyles();
  const iconClass = icon || ICON[variant];
  return (
    <div className={['ht-statuscard', className].filter(Boolean).join(' ')} role="status" {...rest}>
      {variant === 'loading'
        ? <div className="ht-spinner" aria-label="Loading" />
        : <div className={`ht-statuscard__ic ht-statuscard__ic--${variant}`}>
            {variant === 'success' ? <i className="ti ti-check" aria-hidden="true" /> : <i className={`ti ${iconClass}`} aria-hidden="true" />}
          </div>}
      {title && <h3 className="ht-statuscard__title">{title}</h3>}
      {children && <p className="ht-statuscard__body">{children}</p>}
      {action && <div className="ht-statuscard__action">
        {React.isValidElement(action) && action.props.fullWidth === undefined
          ? React.cloneElement(action, { fullWidth: true })
          : action}
      </div>}
    </div>
  );
}
