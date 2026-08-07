import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'top-nav');
  el.textContent = `
.ht-topnav{background:var(--ht-surface);font-family:var(--ht-font-sans)}
.ht-topnav__bar{display:flex;align-items:center;padding:14px 16px 10px}
.ht-topnav__back{display:inline-flex;align-items:center;gap:5px;background:none;border:none;padding:0;cursor:pointer;font-family:inherit;font-size:14px;font-weight:500;color:var(--ht-text-muted)}
.ht-topnav__back:hover{color:var(--ht-text-head)}
.ht-topnav__step{flex:1;text-align:center;font-size:13px;font-weight:500;color:var(--ht-data-text)}
.ht-topnav__action{display:inline-flex;align-items:center;gap:4px;background:none;border:none;padding:0;cursor:pointer;font-family:inherit;font-size:13px;font-weight:500;color:var(--ht-data-text)}
.ht-topnav__action:hover{color:var(--ht-primary-dark)}
.ht-topnav__action.is-saved{color:var(--ht-green-text);cursor:default}
.ht-topnav__track{height:4px;background:var(--ht-progress-track)}
.ht-topnav__fill{height:100%;background:var(--ht-progress-fill);transition:width 300ms ease}
`;
  document.head.appendChild(el);
}

const SavedTick = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2.5 6.5 L5 9 L9.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Hearth mobile top nav for multi-step flows — back, a centered
 * "Step x of y" in data royal, a save-and-exit action (flips to a green
 * "Saved" confirmation), and a 4px royal progress rail on the bottom edge.
 */
export function TopNav({
  step,
  of,
  progress,
  saved = false,
  backLabel = 'Back',
  actionLabel = 'Save & exit',
  savedLabel = 'Saved',
  onBack,
  onAction,
  className = '',
  ...rest
}) {
  ensureStyles();
  const pct = progress != null ? progress : (step && of ? Math.round((step / of) * 100) : 0);
  return (
    <div className={['ht-topnav', className].filter(Boolean).join(' ')} {...rest}>
      <div className="ht-topnav__bar">
        <button type="button" className="ht-topnav__back" onClick={onBack}>
          <span aria-hidden="true">‹</span> {backLabel}
        </button>
        <span className="ht-topnav__step">{step && of ? `Step ${step} of ${of}` : ''}</span>
        <button
          type="button"
          className={['ht-topnav__action', saved ? 'is-saved' : ''].filter(Boolean).join(' ')}
          onClick={saved ? undefined : onAction}
        >
          {saved && <SavedTick />}
          {saved ? savedLabel : actionLabel}
        </button>
      </div>
      <div className="ht-topnav__track">
        <div className="ht-topnav__fill" style={{ width: `${Math.max(0, Math.min(100, pct))}%` }} />
      </div>
    </div>
  );
}
