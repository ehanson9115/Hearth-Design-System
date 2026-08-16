import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'bottom-sheet');
  el.textContent = `
.ht-sheet{background:var(--ht-surface);border-radius:var(--ht-r-xl) var(--ht-r-xl) 0 0;padding:8px 16px 16px;box-shadow:var(--ht-shadow-lg);font-family:var(--ht-font-sans)}
.ht-sheet__handle{width:36px;height:4px;border-radius:2px;background:var(--ht-grey-4);margin:0 auto 16px}
.ht-sheet__title{font-size:15px;font-weight:500;color:var(--ht-text-head);line-height:1.3;margin:0}
.ht-sheet__body{font-size:14.5px;line-height:1.45;color:var(--ht-text-muted);margin-top:6px}
.ht-sheet__actions{display:flex;flex-direction:column;gap:8px;margin-top:16px}
`;
  document.head.appendChild(el);
}

/**
 * Hearth bottom sheet — a focused mobile decision surface anchored to the
 * bottom edge: grab handle, 17px title, muted body, stacked actions
 * (primary CTA on top, quiet dismiss under it). Renders in-flow; position
 * it fixed inside an overlay in a real app.
 */
export function BottomSheet({ title, children, actions, handle = true, className = '', ...rest }) {
  ensureStyles();
  return (
    <div
      className={['ht-sheet', className].filter(Boolean).join(' ')}
      role="dialog"
      aria-modal="true"
      aria-label={typeof title === 'string' ? title : undefined}
      {...rest}
    >
      {handle && <div className="ht-sheet__handle" aria-hidden="true" />}
      {title && <h3 className="ht-sheet__title">{title}</h3>}
      {children && <div className="ht-sheet__body">{children}</div>}
      {actions && <div className="ht-sheet__actions">{actions}</div>}
    </div>
  );
}
