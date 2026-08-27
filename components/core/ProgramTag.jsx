import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'program-tag');
  el.textContent = `
.ht-programtag{display:inline-flex;align-items:center;gap:6px;padding:4px 11px 4px 9px;border-radius:999px;background:var(--ht-action-tint);box-shadow:inset 0 0 0 0.5px color-mix(in srgb, var(--ht-action) 32%, white);font-family:var(--ht-font-sans);font-size:13px;font-weight:500;color:var(--ht-action);line-height:1.4}
.ht-programtag__dot{width:7px;height:7px;border-radius:999px;background:var(--ht-action);flex-shrink:0}
`;
  document.head.appendChild(el);
}

/**
 * Hearth program tag — a violet identity pill naming the program a thing
 * belongs to (WIC, SNAP, FMNP). Purple stays purple: this is identity, not
 * status — use Badge for status.
 *
 * Follows CIVIC's tinted-element recipe: step 3 fill (`--ht-action-tint`),
 * step 6 hairline at 0.5px, step 11 text (`--ht-action`). The hairline is the
 * `color-mix(action 32%, white)` step Button secondary also uses — not
 * `--ht-action-stroke`, which is nearer step 4 and washes out to 1.1:1 at
 * this weight. The fill has to stay at step 3: on the darker `action-select`
 * step the hairline disappears against its own fill.
 */
export function ProgramTag({ dot = true, children, className = '', ...rest }) {
  ensureStyles();
  return (
    <span className={['ht-programtag', className].filter(Boolean).join(' ')} {...rest}>
      {dot && <span className="ht-programtag__dot" aria-hidden="true" />}
      {children}
    </span>
  );
}
