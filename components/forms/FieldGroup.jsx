import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'field-group');
  el.textContent = `
.ht-fieldgroup{box-sizing:border-box;display:flex;flex-direction:column;gap:20px;margin:0;padding:22px;border:1px solid var(--ht-hairline);border-radius:var(--ht-r-block);background:var(--ht-surface);font-family:var(--ht-font-sans);--ht-field-fill:var(--ht-grey-1);--ht-field-max:none}
.ht-fieldgroup--flush{border-color:transparent}
.ht-fieldgroup__legend{float:left;width:100%;padding:0;margin:0 0 2px;font-size:17px;font-weight:500;letter-spacing:-0.005em;color:var(--ht-text-head);line-height:1.3}
.ht-fieldgroup__legend + *{clear:both}
.ht-fieldgroup__desc{font-size:14px;line-height:1.45;color:var(--ht-text-muted);margin:-14px 0 0;text-wrap:pretty}
`;
  document.head.appendChild(el);
}

/**
 * Hearth field group — related questions contained on one white surface.
 * A real <fieldset>/<legend>, so assistive tech announces the group name
 * with each field. Sets --ht-field-fill (tinted controls) and --ht-field-max
 * (full-width) for the Input controls inside, so an input never sits white-on-white.
 */
export function FieldGroup({ legend, description, flush = false, gap, className = '', style, children, ...rest }) {
  ensureStyles();
  return (
    <fieldset
      className={['ht-fieldgroup', flush ? 'ht-fieldgroup--flush' : '', className].filter(Boolean).join(' ')}
      style={gap != null ? { gap: typeof gap === 'number' ? gap + 'px' : gap, ...style } : style}
      {...rest}
    >
      {legend && <legend className="ht-fieldgroup__legend">{legend}</legend>}
      {description && <p className="ht-fieldgroup__desc">{description}</p>}
      {children}
    </fieldset>
  );
}
