import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'program-status-card');
  el.textContent = `
.ht-pstat{background:var(--ht-surface);border:1.5px solid var(--ht-amber-vivid);border-radius:var(--ht-r-xl);padding:8px 18px 16px;font-family:var(--ht-font-sans)}
.ht-pstat--neutral{border:1.5px solid var(--ht-border)}
.ht-pstat--success{border:1.5px solid var(--ht-green-vivid)}
.ht-pstat__head{display:flex;align-items:center;gap:11px;padding:10px 0}
.ht-pstat__ic{width:32px;height:32px;border-radius:999px;flex-shrink:0;display:grid;place-content:center;font-size:17px;background:var(--ht-amber-bg);color:var(--ht-amber-icon)}
.ht-pstat--neutral .ht-pstat__ic{background:var(--ht-grey-2);color:var(--ht-text-muted)}
.ht-pstat--success .ht-pstat__ic{background:var(--ht-green-bg);color:var(--ht-green-text)}
.ht-pstat__title{font-size:15px;font-weight:500;color:var(--ht-text-head);line-height:1.3;margin:0}
.ht-pstat__rule{height:1px;background:var(--ht-grey-3);margin:0 -18px}
.ht-pstat__meta{font-size:14px;line-height:1.45;color:var(--ht-text-muted);margin:12px 0 0;text-wrap:pretty}
.ht-pstat__meta > * + *{margin-top:6px}
`;
  document.head.appendChild(el);
}

const ICON = { amber: 'ti-clock-hour-3', neutral: 'ti-file-description', success: 'ti-circle-check' };

/**
 * Hearth resident program / CTA3 status card — amber-stroke card for
 * application status and in-review states. 32px tinted circle icon + 17px
 * title above a full-bleed hairline, description below.
 */
export function ProgramStatusCard({ tone = 'amber', icon, title, children, className = '', ...rest }) {
  ensureStyles();
  return (
    <div className={['ht-pstat', `ht-pstat--${tone}`, className].filter(Boolean).join(' ')} {...rest}>
      <div className="ht-pstat__head">
        <span className="ht-pstat__ic"><i className={`ti ${icon || ICON[tone]}`} aria-hidden="true" /></span>
        <h3 className="ht-pstat__title">{title}</h3>
      </div>
      <div className="ht-pstat__rule" />
      {children && <div className="ht-pstat__meta">{children}</div>}
    </div>
  );
}
