import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'program-status-card');
  el.textContent = `
/* Base holds layout only; every tone states its own fill, stroke and icon tint
 * as a modifier, so the four read symmetrically instead of one hiding in the
 * base rule. Fills are the WASH tier (2026-08-19, Emma) — it was
 * --ht-surface, which rendered plain white in consuming apps and left the
 * stroke carrying the status alone. -bg stays for chips and inline fills.
 * Radius is --ht-r-card, the card tier: this sat on the legacy --ht-r-xl alias
 * at 12px, which made it rounder than every other card and disagreed with
 * Figma's 8. */
.ht-pstat{border:1.5px solid transparent;border-radius:var(--ht-r-card);padding:8px 18px 16px;font-family:var(--ht-font-sans)}
.ht-pstat--warning{background:var(--ht-amber-wash);border-color:var(--ht-amber-vivid)}
.ht-pstat--neutral{background:var(--ht-grey-1);border-color:var(--ht-border)}
.ht-pstat--success{background:var(--ht-green-wash);border-color:var(--ht-green-vivid)}
.ht-pstat--danger{background:var(--ht-red-wash);border-color:var(--ht-red-vivid)}
.ht-pstat__head{display:flex;align-items:center;gap:11px;padding:10px 0}
.ht-pstat__ic{width:32px;height:32px;border-radius:999px;flex-shrink:0;display:grid;place-content:center;font-size:17px}
.ht-pstat--warning .ht-pstat__ic{background:var(--ht-amber-bg);color:var(--ht-amber-icon)}
.ht-pstat--neutral .ht-pstat__ic{background:var(--ht-grey-2);color:var(--ht-text-muted)}
.ht-pstat--success .ht-pstat__ic{background:var(--ht-green-bg);color:var(--ht-green-text)}
.ht-pstat--danger .ht-pstat__ic{background:var(--ht-red-bg);color:var(--ht-red-text)}
.ht-pstat__title{font-size:15px;font-weight:500;color:var(--ht-text-head);line-height:1.3;margin:0}
.ht-pstat__rule{height:1px;background:var(--ht-grey-3);margin:0 -18px}
.ht-pstat__meta{font-size:14px;line-height:1.45;color:var(--ht-text-muted);margin:12px 0 0;text-wrap:pretty}
.ht-pstat__meta > * + *{margin-top:6px}
`;
  document.head.appendChild(el);
}

const ICON = {
  warning: 'ti-clock-hour-3',
  neutral: 'ti-file-description',
  success: 'ti-circle-check',
  danger: 'ti-alert-triangle',
};

/* `amber` was the original tone name. It is a HUE name, which the system's own
 * rule forbids for component APIs, so the tone is `warning` now — but the old
 * value still ships in the bundle that prototypes load, so it keeps working. */
const TONE_ALIAS = { amber: 'warning' };

/**
 * Hearth resident program / CTA3 status card — a status-washed card with a
 * matching stroke, for application status and in-review states. 32px tinted
 * circle icon + 17px title above a full-bleed hairline, description below.
 *
 * Tones: `warning` (default, in review / action pending), `neutral` (a dated
 * obligation, no alarm), `success` (approved), `danger` (denied / expired).
 */
export function ProgramStatusCard({ tone = 'warning', icon, title, children, className = '', ...rest }) {
  ensureStyles();
  const t = TONE_ALIAS[tone] || tone;
  return (
    <div className={['ht-pstat', `ht-pstat--${t}`, className].filter(Boolean).join(' ')} {...rest}>
      <div className="ht-pstat__head">
        <span className="ht-pstat__ic"><i className={`ti ${icon || ICON[t]}`} aria-hidden="true" /></span>
        <h3 className="ht-pstat__title">{title}</h3>
      </div>
      <div className="ht-pstat__rule" />
      {children && <div className="ht-pstat__meta">{children}</div>}
    </div>
  );
}
