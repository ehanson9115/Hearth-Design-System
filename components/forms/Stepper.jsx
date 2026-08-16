import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'stepper');
  el.textContent = `
.ht-stepper{display:inline-flex;align-items:center;gap:10px;font-family:var(--ht-font-sans)}
.ht-stepper--full{display:flex;width:100%;justify-content:space-between;gap:0}
.ht-stepper__btn{box-sizing:border-box;width:44px;height:44px;display:grid;place-content:center;border-radius:var(--ht-r-card);background:var(--ht-surface);border:1px solid var(--ht-border);color:var(--ht-text-head);font-size:19px;cursor:pointer;font-family:inherit;transition:background 140ms,border-color 140ms}
.ht-stepper__btn:hover:not([disabled]){background:var(--ht-grey-1);border-color:var(--ht-action)}
.ht-stepper__btn:focus-visible{outline:none;box-shadow:var(--ht-ring) var(--ht-ring-color)}
.ht-stepper__btn[disabled]{opacity:.4;cursor:not-allowed}
.ht-stepper__val{min-width:32px;text-align:center;font-size:17px;font-weight:500;color:var(--ht-text-head);font-variant-numeric:tabular-nums}
.ht-stepper__unit{font-size:14px;font-weight:400;color:var(--ht-text-muted);margin-left:2px}
`;
  document.head.appendChild(el);
}

/**
 * Hearth number stepper — two 44px tap targets around a tabular value, for
 * small household-scale counts. Beyond ~20, use an Input number input.
 */
export function Stepper({
  value = 0,
  onChange,
  min = 0,
  max = 99,
  step = 1,
  unit,
  label,
  fullWidth = false,
  className = '',
  ...rest
}) {
  ensureStyles();
  const set = (n) => { if (onChange) onChange(Math.min(max, Math.max(min, n))); };
  return (
    <div className={['ht-stepper', fullWidth ? 'ht-stepper--full' : '', className].filter(Boolean).join(' ')} {...rest}>
      <button
        type="button" className="ht-stepper__btn" disabled={value <= min}
        aria-label={'Decrease' + (label ? ' ' + label : '')} onClick={() => set(value - step)}
      >&minus;</button>
      <span className="ht-stepper__val" role="status" aria-live="polite" aria-label={label}>
        {value}{unit && <span className="ht-stepper__unit">{unit}</span>}
      </span>
      <button
        type="button" className="ht-stepper__btn" disabled={value >= max}
        aria-label={'Increase' + (label ? ' ' + label : '')} onClick={() => set(value + step)}
      >+</button>
    </div>
  );
}
