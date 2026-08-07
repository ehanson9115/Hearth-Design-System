import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'segmented');
  el.textContent = `
.ht-seg{display:inline-flex;background:var(--ht-grey-4);padding:3px;border-radius:999px;gap:2px;font-family:var(--ht-font-sans)}
.ht-seg--full{display:flex;width:100%}
.ht-seg--full .ht-seg__btn{flex:1;padding:0 12px;overflow:hidden;text-overflow:ellipsis}
.ht-seg__btn{height:34px;padding:0 18px;border:none;background:transparent;font-family:inherit;font-size:15px;font-weight:500;color:var(--ht-text-on-tint);border-radius:999px;cursor:pointer;transition:background 140ms,color 140ms;white-space:nowrap}
.ht-seg--md .ht-seg__btn{height:44px}
.ht-seg__btn:hover{color:var(--ht-text-head)}
.ht-seg__btn.is-on{background:var(--ht-surface);color:var(--ht-action);box-shadow:0 1px 2px rgba(59,22,131,0.10);font-weight:500}
.ht-seg__btn:focus-visible{outline:none;box-shadow:var(--ht-ring) var(--ht-ring-color)}
`;
  document.head.appendChild(el);
}

/**
 * Hearth segmented control — small set of mutually exclusive options.
 * options: array of strings or {value,label}.
 * `fullWidth` gives equal segments across the container (view switcher);
 * `size="md"` raises the bar to a 44px touch target.
 */
export function SegmentedControl({ options = [], value, onChange, fullWidth = false, size = 'sm', className = '', ...rest }) {
  ensureStyles();
  return (
    <div
      className={['ht-seg', fullWidth ? 'ht-seg--full' : '', size === 'md' ? 'ht-seg--md' : '', className].filter(Boolean).join(' ')}
      role="tablist"
      {...rest}
    >
      {options.map((o) => {
        const opt = typeof o === 'string' ? { value: o, label: o } : o;
        const on = opt.value === value;
        return (
          <button key={opt.value} type="button" role="tab" aria-selected={on}
            className={['ht-seg__btn', on ? 'is-on' : ''].filter(Boolean).join(' ')}
            onClick={onChange ? () => onChange(opt.value) : undefined}>
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
