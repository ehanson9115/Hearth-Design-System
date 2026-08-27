import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'panel');
  el.textContent = `
.ht-panel{background:var(--ht-surface);border:1px solid var(--ht-hairline);border-radius:var(--ht-r-card);overflow:hidden;font-family:var(--ht-font-sans);box-shadow:var(--ht-shadow-md)}
.ht-panel__head{display:flex;align-items:baseline;gap:7px;padding:14px 18px 0;font-size:15px;font-weight:500;letter-spacing:-0.005em;color:var(--ht-text-head);background:var(--ht-head-zone)}
.ht-panel__head i{font-size:15px;color:var(--ht-action);align-self:center}
.ht-panel__action{margin-left:auto;font-size:12.5px;font-weight:500;color:var(--ht-action);background:none;border:none;border-radius:5px;padding:3px 9px;cursor:pointer;font-family:inherit}
.ht-panel__action:hover{background:var(--ht-action-tint)}
.ht-panel__sub{padding:1px 18px 12px;font-size:12.5px;color:var(--ht-text-on-tint);background:var(--ht-head-zone);border-bottom:1px solid var(--ht-grey-3)}
.ht-panel__head--band{padding:8px 18px;background:var(--ht-ink-surface);color:#fff;font-size:11.5px;font-weight:500;letter-spacing:0.06em;text-transform:uppercase;align-items:center;border-radius:0}
.ht-panel__head--band i{color:var(--ht-on-ink-muted)}
.ht-panel__live{width:7px;height:7px;border-radius:999px;background:var(--ht-live);align-self:center}
.ht-panel__meta{margin-left:auto;font-size:11px;color:var(--ht-on-ink-subtle);font-weight:400;letter-spacing:0.01em;text-transform:none}
.ht-panel__body{padding:12px 18px 16px}
.ht-panel__section{padding:12px 18px 5px;font-size:10.5px;font-weight:500;letter-spacing:0.07em;text-transform:uppercase;color:var(--ht-text-muted)}
.ht-panel__section--divide{border-top:1px solid var(--ht-grey-3)}
`;
  document.head.appendChild(el);
}

/* Panel is the CONTAINER tier, so it carries shadow-md while the seven card
 * surfaces carry shadow-sm (Emma's standing rule: cards sm, container panels
 * md). Note md includes a faint 0 0 0 1px ring that sits under the hairline
 * border — 3% of primary-dark, so it reads as a slight edge, not a doubled
 * stroke. */

/**
 * Hearth panel — the "card with header zone" (Cake-style: 15–16px/500 ink
 * headline + 12.5px muted subtitle, NOT a caps eyebrow). Use `band` for the
 * ONE dark ink band per screen (live/primary panel only); `live` adds the
 * green pulse dot. Body content goes in children — wrap prose in Panel.Body,
 * caps sub-headers in Panel.Section, and lay list rows directly.
 */
export function Panel({ title, icon, subtitle, action, onAction, band = false, live = false, meta, className = '', children, ...rest }) {
  ensureStyles();
  return (
    <div className={['ht-panel', className].filter(Boolean).join(' ')} {...rest}>
      <div className={band ? 'ht-panel__head ht-panel__head--band' : 'ht-panel__head'}>
        {live && <span className="ht-panel__live" aria-hidden="true" />}
        {icon && !live && <i className={`ti ${icon}`} aria-hidden="true" />}
        {title}
        {action && <button className="ht-panel__action" type="button" onClick={onAction}>{action}</button>}
        {meta && <span className="ht-panel__meta">{meta}</span>}
      </div>
      {subtitle && !band && <div className="ht-panel__sub">{subtitle}</div>}
      {children}
    </div>
  );
}

/** Padded body region for prose / key-value content. */
export function PanelBody({ className = '', children, ...rest }) {
  return <div className={['ht-panel__body', className].filter(Boolean).join(' ')} {...rest}>{children}</div>;
}

/** Caps sub-section header inside a panel (10.5px / 500 / uppercase). */
export function PanelSection({ divide = false, className = '', children, ...rest }) {
  return <div className={['ht-panel__section', divide ? 'ht-panel__section--divide' : '', className].filter(Boolean).join(' ')} {...rest}>{children}</div>;
}

// Ergonomic aliases for source-level use (Panel.Body / Panel.Section). The
// bundler exposes the top-level named exports above on the namespace.
Panel.Body = PanelBody;
Panel.Section = PanelSection;
