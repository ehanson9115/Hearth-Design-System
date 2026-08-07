import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'yes-no');
  el.textContent = `
.ht-yesno{display:grid;grid-template-columns:1fr 1fr;gap:10px;font-family:var(--ht-font-sans)}
.ht-yesno__opt{min-height:44px;display:flex;align-items:center;justify-content:center;padding:8px 16px;border-radius:var(--ht-r-input);background:var(--ht-surface);box-shadow:0 0 0 1px var(--ht-border);border:none;cursor:pointer;font-family:var(--ht-font-sans);font-size:15px;font-weight:500;color:var(--ht-text);transition:box-shadow 150ms,background 150ms,color 150ms}
.ht-yesno__opt:hover{box-shadow:0 0 0 1px var(--ht-action)}
.ht-yesno__opt:focus-visible{outline:none;box-shadow:var(--ht-ring) var(--ht-ring-color)}
.ht-yesno__opt.is-selected{background:var(--ht-action-tint);box-shadow:0 0 0 1px var(--ht-action);font-weight:500;color:var(--ht-primary-dark)}
`;
  document.head.appendChild(el);
}

/**
 * Hearth yes/no control — a binary question as two equal 44px tap targets.
 * Starts with neither selected; the chosen side gets the violet tint and a 1px
 * violet stroke. Deliberately has no radio indicator — a two-option row is
 * read as a pair, so the fill alone is unambiguous (ratified 2026-08-01).
 * For anything beyond yes/no, use OptionCard or SegmentedControl.
 */
export function SegmentedYesNo({ value = null, onChange, yesLabel = 'Yes', noLabel = 'No', className = '', ...rest }) {
  ensureStyles();
  const opts = [
    { key: 'yes', label: yesLabel },
    { key: 'no', label: noLabel },
  ];
  return (
    <div className={['ht-yesno', className].filter(Boolean).join(' ')} role="radiogroup" {...rest}>
      {opts.map((o) => (
        <button
          key={o.key}
          type="button"
          role="radio"
          aria-checked={value === o.key}
          className={['ht-yesno__opt', value === o.key ? 'is-selected' : ''].filter(Boolean).join(' ')}
          onClick={onChange ? () => onChange(o.key) : undefined}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
