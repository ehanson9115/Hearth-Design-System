import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'action-sheet');
  el.textContent = `
.ht-actionsheet{display:flex;flex-direction:column;gap:8px;font-family:var(--ht-font-sans)}
.ht-actionsheet__group{background:var(--ht-surface);border-radius:12px;overflow:hidden;box-shadow:var(--ht-shadow-lg)}
.ht-actionsheet__row{display:flex;align-items:center;justify-content:center;width:100%;min-height:60px;padding:17px 0;background:var(--ht-surface);border:none;cursor:pointer;font-family:inherit;font-size:20px;font-weight:400;color:var(--ht-action);line-height:1.3;transition:background 140ms}
.ht-actionsheet__row + .ht-actionsheet__row{border-top:1px solid var(--ht-hairline)}
.ht-actionsheet__row:hover{background:var(--ht-grey-1)}
.ht-actionsheet__row.is-destructive{color:var(--ht-red-text)}
.ht-actionsheet__row.is-cancel{font-weight:500}
`;
  document.head.appendChild(el);
}

/**
 * Hearth action sheet — the OS-style choice list for a tap-held decision
 * (photo source, remove). One rounded group of 20px actions (destructive in
 * AA red), then a separate bolder Cancel group. 13px radius and 20px type
 * are the platform convention, kept on purpose. Renders in-flow; fix it to
 * the bottom inside your own scrim in an app.
 */
export function ActionSheet({ actions = [], cancelLabel = 'Cancel', onCancel, className = '', ...rest }) {
  ensureStyles();
  return (
    <div className={['ht-actionsheet', className].filter(Boolean).join(' ')} role="menu" {...rest}>
      <div className="ht-actionsheet__group">
        {actions.map((a, i) => (
          <button
            key={i}
            type="button"
            role="menuitem"
            className={['ht-actionsheet__row', a.destructive ? 'is-destructive' : ''].filter(Boolean).join(' ')}
            onClick={a.onClick}
          >
            {a.label}
          </button>
        ))}
      </div>
      {cancelLabel && (
        <div className="ht-actionsheet__group">
          <button type="button" className="ht-actionsheet__row is-cancel" onClick={onCancel}>
            {cancelLabel}
          </button>
        </div>
      )}
    </div>
  );
}
