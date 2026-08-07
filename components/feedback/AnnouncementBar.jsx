import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'announce');
  el.textContent = `
.ht-announce{display:flex;align-items:center;gap:12px;background:var(--ht-action-tint);border:1px solid #E0D3F8;border-radius:var(--ht-r-card);padding:11px 18px;font-family:var(--ht-font-sans)}
.ht-announce__ic{width:32px;height:32px;border-radius:999px;background:var(--ht-surface);color:var(--ht-action);display:grid;place-content:center;font-size:16px;flex-shrink:0}
.ht-announce__msg{font-size:13.5px;color:var(--ht-primary-dark);font-weight:500;flex:1}
.ht-announce__btn{font-size:12.5px;font-weight:500;color:var(--ht-action);background:var(--ht-surface);border:none;border-radius:var(--ht-r-card);padding:7px 14px;cursor:pointer;font-family:inherit}
.ht-announce__btn:hover{background:#fff}
.ht-announce__x{color:var(--ht-primary-dark);font-size:15px;cursor:pointer;background:none;border:none;padding:2px;line-height:1;font-family:inherit}
`;
  document.head.appendChild(el);
}

/**
 * Hearth announcement bar — violet tint + stroke, for promoting/announcing
 * only (never for status; that's NotificationCard). One icon, message,
 * optional action button, optional dismiss.
 */
export function AnnouncementBar({
  icon = 'ti-speakerphone',
  children,
  action,
  onAction,
  onDismiss,
  className = '',
  ...rest
}) {
  ensureStyles();
  return (
    <div className={['ht-announce', className].filter(Boolean).join(' ')} {...rest}>
      <span className="ht-announce__ic"><i className={`ti ${icon}`} aria-hidden="true" /></span>
      <p className="ht-announce__msg">{children}</p>
      {action && <button className="ht-announce__btn" type="button" onClick={onAction}>{action}</button>}
      {onDismiss && <button className="ht-announce__x" type="button" aria-label="Dismiss" onClick={onDismiss}><i className="ti ti-x" aria-hidden="true" /></button>}
    </div>
  );
}
