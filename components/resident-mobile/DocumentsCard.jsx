import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'documents-card');
  el.textContent = `
.ht-doccard{background:var(--ht-surface);border:1px solid var(--ht-hairline);border-radius:var(--ht-r-block);padding:16px;font-family:var(--ht-font-sans)}
.ht-doccard__head{display:flex;align-items:center;gap:10px}
.ht-doccard__title{font-size:15px;font-weight:500;color:var(--ht-text-head);line-height:1.3;margin:0}
.ht-doccard__badge{margin-left:auto;display:inline-flex;align-items:center;gap:5px;flex-shrink:0;font-size:12.5px;font-weight:500;line-height:1.5;padding:3px 10px;border-radius:999px;background:var(--ht-badge-warning-bg);color:var(--ht-amber-text);box-shadow:inset 0 0 0 1px var(--ht-badge-warning-line);white-space:nowrap}
.ht-doccard__badge i{width:6px;height:6px;border-radius:999px;background:var(--ht-amber-vivid);flex-shrink:0}
.ht-doccard__sub{font-size:13px;line-height:1.4;color:var(--ht-text-muted);margin:4px 0 0;text-wrap:pretty}
.ht-doccard__rows{display:flex;flex-direction:column;gap:0;margin-top:14px}
.ht-doccard__row{display:flex;align-items:flex-start;gap:10px;text-align:left}
.ht-doccard__row + .ht-doccard__row{border-top:1px solid var(--ht-grey-3);margin-top:10px;padding-top:10px}
.ht-doccard__ic{width:24px;height:24px;border-radius:6px;flex-shrink:0;display:grid;place-content:center;font-size:14px;background:var(--ht-grey-2);color:var(--ht-text-muted)}
.ht-doccard__row.is-missing .ht-doccard__ic{background:var(--ht-amber-bg);color:var(--ht-amber-icon)}
.ht-doccard__rtitle{font-size:14px;font-weight:500;color:var(--ht-text-head);line-height:1.35}
.ht-doccard__rsub{font-size:13px;line-height:1.35;color:var(--ht-text-muted);margin-top:1px}
.ht-doccard__cta{display:flex;align-items:center;justify-content:center;gap:7px;width:100%;height:44px;margin-top:16px;border:0;border-radius:var(--ht-r-card);background:var(--ht-action);color:#fff;font-family:inherit;font-size:15px;font-weight:500;cursor:pointer;transition:background 140ms}
.ht-doccard__cta:hover{background:var(--ht-action-hover,var(--ht-action))}
.ht-doccard__cta:focus-visible{outline:var(--ht-focus-ring,2px solid var(--ht-action));outline-offset:2px}
`;
  document.head.appendChild(el);
}

/**
 * Hearth resident documents card — doc list with a full-width upload CTA.
 * Header carries an amber count badge for outstanding items. Row icons
 * follow the chip rule: small rounded squares (24px, r6), top-aligned —
 * never large circles. docs: [{title, subtitle, icon, missing}].
 */
export function DocumentsCard({
  title = 'Documents',
  badge,
  subtitle,
  docs = [],
  cta = 'Upload',
  onCta,
  ctaIcon = 'ti-upload',
  className = '',
  ...rest
}) {
  ensureStyles();
  return (
    <div className={['ht-doccard', className].filter(Boolean).join(' ')} {...rest}>
      <div className="ht-doccard__head">
        <h3 className="ht-doccard__title">{title}</h3>
        {badge && <span className="ht-doccard__badge"><i aria-hidden="true" />{badge}</span>}
      </div>
      {subtitle && <p className="ht-doccard__sub">{subtitle}</p>}
      {docs.length > 0 && (
        <div className="ht-doccard__rows">
          {docs.map((d, i) => (
            <div key={i} className={['ht-doccard__row', d.missing ? 'is-missing' : ''].filter(Boolean).join(' ')}>
              <span className="ht-doccard__ic"><i className={`ti ${d.icon || (d.missing ? 'ti-file-plus' : 'ti-file-check')}`} aria-hidden="true" /></span>
              <div>
                <div className="ht-doccard__rtitle">{d.title}</div>
                {d.subtitle && <div className="ht-doccard__rsub">{d.subtitle}</div>}
              </div>
            </div>
          ))}
        </div>
      )}
      {cta && (
        <button type="button" className="ht-doccard__cta" onClick={onCta}>
          {ctaIcon && <i className={`ti ${ctaIcon}`} aria-hidden="true" style={{ fontSize: 17 }} />}{cta}
        </button>
      )}
    </div>
  );
}
