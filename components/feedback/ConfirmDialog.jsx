import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'confirm-dialog');
  el.textContent = `
.ht-confirm__scrim{position:fixed;inset:0;background:rgba(20,17,31,0.45);display:grid;place-items:center;padding:24px;z-index:50}
.ht-confirm{background:var(--ht-surface);border-radius:var(--ht-r-block);box-shadow:var(--ht-shadow-lg);padding:22px;width:100%;max-width:420px;font-family:var(--ht-font-sans)}
.ht-confirm__ic{width:40px;height:40px;border-radius:999px;display:grid;place-content:center;font-size:19px;margin-bottom:12px}
.ht-confirm__ic--danger{background:var(--ht-red-soft);color:var(--ht-red-vivid)}
.ht-confirm__ic--warning{background:var(--ht-amber-bg);color:var(--ht-amber-icon)}
.ht-confirm__ic--default{background:var(--ht-action-tint);color:var(--ht-action)}
.ht-confirm__title{font-size:17px;font-weight:500;color:var(--ht-text-head);line-height:1.3;margin:0}
.ht-confirm__body{font-size:14px;line-height:1.5;color:var(--ht-text-muted);margin:6px 0 0;text-wrap:pretty}
.ht-confirm__actions{display:flex;gap:8px;justify-content:flex-end;margin-top:20px}
`;
  document.head.appendChild(el);
}

const ICON = { danger: 'ti-alert-triangle', warning: 'ti-alert-circle', default: 'ti-help-circle' };

/**
 * Hearth confirm dialog — the desktop decision surface for irreversible
 * caseworker actions (deny, close, delete). Tone drives the icon tint and
 * the confirm button variant. Renders over a scrim unless `inline`.
 */
export function ConfirmDialog({
  tone = 'danger',
  icon,
  title,
  children,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  onCancel,
  actions,
  inline = false,
  className = '',
  ...rest
}) {
  ensureStyles();
  const ns = typeof window !== 'undefined' ? window.Hearth_5938e8 : null;
  const Btn = ns && ns.Button;
  const confirmVariant = tone === 'danger' ? 'danger' : 'primary';

  const card = (
    <div
      className={['ht-confirm', className].filter(Boolean).join(' ')}
      role="alertdialog"
      aria-modal="true"
      aria-label={typeof title === 'string' ? title : undefined}
      {...rest}
    >
      <div className={'ht-confirm__ic ht-confirm__ic--' + tone}>
        <i className={'ti ' + (icon || ICON[tone])} aria-hidden="true" />
      </div>
      {title && <h2 className="ht-confirm__title">{title}</h2>}
      {children && <p className="ht-confirm__body">{children}</p>}
      <div className="ht-confirm__actions">
        {actions || (Btn ? (
          <>
            <Btn variant="secondary" size="sm" onClick={onCancel}>{cancelLabel}</Btn>
            <Btn variant={confirmVariant} size="sm" onClick={onConfirm}>{confirmLabel}</Btn>
          </>
        ) : null)}
      </div>
    </div>
  );

  if (inline) return card;
  return (
    <div className="ht-confirm__scrim" onClick={(e) => { if (e.target === e.currentTarget && onCancel) onCancel(); }}>
      {card}
    </div>
  );
}
