import React from 'react';
import { Eyebrow } from '../core/Eyebrow.jsx';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'step-nav');
  el.textContent = `
.ht-stepnav{font-family:var(--ht-font-sans);max-width:460px}
.ht-stepnav__back{display:inline-flex;align-items:center;gap:4px;font-size:14px;font-weight:500;color:var(--ht-text-muted);background:none;border:none;cursor:pointer;padding:0;margin-bottom:10px;font-family:inherit}
.ht-stepnav__back:hover{color:var(--ht-text-head)}
/* Section name and step counter share one baseline row — eyebrow left, counter
 * right — so naming the section costs no extra vertical line above the title.
 * With only one of the two present it sits left, as the counter used to. */
.ht-stepnav__eyerow{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:6px}
.ht-stepnav__count{font-size:13px;font-weight:500;color:var(--ht-data-text);white-space:nowrap}
.ht-stepnav__title{font-size:20px;font-weight:500;letter-spacing:-0.01em;margin:0 0 4px;color:var(--ht-text-head)}
.ht-stepnav__hint{font-size:13px;color:var(--ht-text-muted);margin:0 0 12px;line-height:1.4}
`;
  document.head.appendChild(el);
}

/**
 * Hearth multi-step header — the HEADLINE BLOCK of a step screen: back link +
 * optional section eyebrow + "Step N of M" counter on one row, step title,
 * hint, and the step's fields as `children`.
 *
 * `section` names which part of a long form this step belongs to. It renders as
 * an uppercase `Eyebrow` at the left of the counter row — NOT as a muted clause
 * trailing the counter, which read as clutter competing with the title right
 * beneath it (2026-08-19, Emma). Omit it on short flows where the title alone
 * is orientation enough.
 *
 * It renders NO action buttons (2026-08-19, Emma). Back and Continue belong
 * under the step content — typically in a sticky bottom bar that is a SIBLING
 * of this block, not a child — so putting them here would drag both controls
 * up into the headline. The EE resident wizard reached the same conclusion
 * independently and dropped the slot in its port, so this brings Hearth in
 * line rather than keeping an affordance nothing uses.
 */
export function StepNav({
  step, of, section, title, hint,
  onBack,
  className = '', children, ...rest
}) {
  ensureStyles();
  return (
    <div className={['ht-stepnav', className].filter(Boolean).join(' ')} {...rest}>
      {onBack && (
        <button className="ht-stepnav__back" type="button" onClick={onBack}>
          <i className="ti ti-arrow-left" aria-hidden="true" style={{ fontSize: 14 }} /> Back
        </button>
      )}
      {(section || step != null) && (
        <div className="ht-stepnav__eyerow">
          {section && <Eyebrow>{section}</Eyebrow>}
          {step != null && (
            <span className="ht-stepnav__count">Step {step}{of != null ? ` of ${of}` : ''}</span>
          )}
        </div>
      )}
      {title && <h2 className="ht-stepnav__title">{title}</h2>}
      {hint && <p className="ht-stepnav__hint">{hint}</p>}
      {children}
    </div>
  );
}
