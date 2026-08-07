import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'badge');
  el.textContent = `
.ht-badge{display:inline-flex;align-items:center;gap:5px;font-family:var(--ht-font-sans);font-size:12px;font-weight:500;line-height:1.5;padding:3px 10px;border-radius:999px;white-space:nowrap}
.ht-badge .ht-badge__dot{width:6px;height:6px;border-radius:999px;flex-shrink:0}
.ht-badge .ht-badge__check{width:11px;height:11px;flex-shrink:0}
.ht-badge--chip{border-radius:var(--ht-r-chip);padding:2px 8px}
.ht-badge--neutral{background:var(--ht-grey-4);color:var(--ht-text-on-tint)}
.ht-badge--outline{background:var(--ht-surface);color:var(--ht-text-muted);box-shadow:inset 0 0 0 1px var(--ht-border)}
.ht-badge--brand{background:var(--ht-action-tint);color:var(--ht-action)}
.ht-badge--info{background:var(--ht-badge-info-bg);color:var(--ht-data-text);box-shadow:inset 0 0 0 1px var(--ht-badge-info-line)}
.ht-badge--info .ht-badge__dot{background:var(--ht-royal)}
.ht-badge--success{background:var(--ht-badge-success-bg);color:var(--ht-green-text);box-shadow:inset 0 0 0 1px var(--ht-badge-success-line)}
.ht-badge--success .ht-badge__dot{background:var(--ht-green-vivid)}
.ht-badge--warning{background:var(--ht-badge-warning-bg);color:var(--ht-amber-text);box-shadow:inset 0 0 0 1px var(--ht-badge-warning-line)}
.ht-badge--warning .ht-badge__dot{background:var(--ht-amber-vivid)}
.ht-badge--danger{background:var(--ht-badge-danger-bg);color:var(--ht-red-text);box-shadow:inset 0 0 0 1px var(--ht-badge-danger-line)}
.ht-badge--danger .ht-badge__dot{background:var(--ht-red-vivid)}
`;
  document.head.appendChild(el);
}

// Status variants default to a leading dot; tag variants don't.
const STATUS = new Set(['info', 'success', 'warning', 'danger']);

const CheckMark = () => (
  <svg className="ht-badge__check" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2.5 6.5 L5 9 L9.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Hearth badge. Dot pills communicate STATUS (outlined, vivid dot); plain
 * pills are tags. Color never signals status alone — the dot/check + label do.
 *
 * `chip` renders the compact 4px inline chip (tinted fill + AA text, no dot) —
 * for confidence/inline status labels like "OCR: High confidence". `check`
 * leads with a drawn checkmark for positive confirmations ("Match confirmed").
 */
export function Badge({ variant = 'neutral', dot, check = false, chip = false, children, className = '', ...rest }) {
  ensureStyles();
  const showDot = check ? false : dot === undefined ? STATUS.has(variant) && !chip : dot;
  const cls = ['ht-badge', `ht-badge--${variant}`, chip ? 'ht-badge--chip' : '', className].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {check && <CheckMark />}
      {showDot && <span className="ht-badge__dot" aria-hidden="true" />}
      {children}
    </span>
  );
}
