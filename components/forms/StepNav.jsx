import React from 'react';

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
.ht-stepnav__label{font-size:13px;color:var(--ht-text-muted);margin-bottom:6px}
.ht-stepnav__label b{color:var(--ht-data-text);font-weight:500}
.ht-stepnav__title{font-size:20px;font-weight:500;letter-spacing:-0.01em;margin:0 0 4px;color:var(--ht-text-head)}
.ht-stepnav__hint{font-size:13px;color:var(--ht-text-muted);margin:0;line-height:1.4}
.ht-stepnav__footer{display:flex;align-items:center;gap:12px;margin-top:20px;padding-top:16px;border-top:1px solid var(--ht-grey-3)}
.ht-stepnav__spacer{flex:1}
.ht-stepnav__save{font-size:13px;font-weight:500;color:var(--ht-data-text);background:none;border:none;cursor:pointer;text-decoration:underline;text-underline-offset:3px;padding:0;font-family:inherit}
`;
  document.head.appendChild(el);
}

/**
 * Hearth multi-step header: back link + "Step N of M" label + step title +
 * hint. Compose with ProgressBar above and the footer controls below (render
 * your own Buttons as `children` of the footer via the `footer` prop).
 */
export function StepNav({
  step, of, section, title, hint,
  onBack, footer,
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
      {(step != null || section) && (
        <div className="ht-stepnav__label">
          {step != null && <b>Step {step}{of != null ? ` of ${of}` : ''}</b>}
          {step != null && section ? ' · ' : ''}{section}
        </div>
      )}
      {title && <h2 className="ht-stepnav__title">{title}</h2>}
      {hint && <p className="ht-stepnav__hint">{hint}</p>}
      {children}
      {footer && <div className="ht-stepnav__footer">{footer}</div>}
    </div>
  );
}

/** Left-aligned helper for the footer: renders a "Save and finish later" link. */
export function StepNavSaveLater({ children = 'Save and finish later', ...rest }) {
  return <button className="ht-stepnav__save" type="button" {...rest}>{children}</button>;
}

/** Flexible gap for the footer row. */
export function StepNavSpacer() {
  return <span className="ht-stepnav__spacer" />;
}

StepNav.SaveLater = StepNavSaveLater;
StepNav.Spacer = StepNavSpacer;
