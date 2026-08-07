import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'progress');
  el.textContent = `
.ht-progress{font-family:var(--ht-font-sans);max-width:380px}
.ht-progress--full{max-width:none}
.ht-progress__track{height:8px;border-radius:999px;background:var(--ht-progress-track);overflow:hidden}
.ht-progress__fill{height:100%;border-radius:999px;background:var(--ht-progress-fill);transition:width 300ms ease}
.ht-progress__steps{font-size:13px;color:var(--ht-text-muted);margin-top:8px}
.ht-progress__steps b{color:var(--ht-data-text);font-weight:500}
`;
  document.head.appendChild(el);
}

/**
 * Hearth progress bar — royal fill on a royal-tint track (data color, in a
 * bar context). Optional step caption below.
 */
export function ProgressBar({ value = 0, step, of, label, fullWidth = false, className = '', ...rest }) {
  ensureStyles();
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className={['ht-progress', fullWidth ? 'ht-progress--full' : '', className].filter(Boolean).join(' ')} {...rest}>
      <div className="ht-progress__track" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
        <div className="ht-progress__fill" style={{ width: `${pct}%` }} />
      </div>
      {(step != null || label) && (
        <p className="ht-progress__steps">
          {step != null && <b>Step {step}{of != null ? ` of ${of}` : ''}</b>}
          {step != null && label ? ' — ' : ''}{label}
        </p>
      )}
    </div>
  );
}
