import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'success-hero');
  el.textContent = `
.ht-successhero{font-family:var(--ht-font-sans);display:flex;flex-direction:column;align-items:center;gap:16px;text-align:center}
.ht-successhero-ring{width:92px;height:92px;border-radius:50%;display:grid;place-items:center;flex-shrink:0}
.ht-successhero-disc{width:72px;height:72px;border-radius:50%;display:grid;place-items:center}
.ht-successhero-disc>i{font-size:36px;line-height:1;color:var(--ht-on-ink)}
.ht-successhero.tone-success .ht-successhero-ring{background:var(--ht-green-bg)}
.ht-successhero.tone-success .ht-successhero-disc{background:var(--ht-green-vivid)}
.ht-successhero.tone-accent .ht-successhero-ring{background:var(--ht-action-tint)}
.ht-successhero.tone-accent .ht-successhero-disc{background:var(--ht-action)}
.ht-successhero-copy{display:flex;flex-direction:column;gap:6px;align-items:center}
.ht-successhero-title{font-size:20px;font-weight:500;letter-spacing:-0.01em;color:var(--ht-text-head);line-height:1.25}
.ht-successhero-desc{font-size:14px;font-weight:400;color:var(--ht-text-muted);line-height:1.45;max-width:36ch;text-wrap:pretty}
`;
  document.head.appendChild(el);
}

/**
 * Hearth success hero — the confirmation medallion (92px ring, 72px disc,
 * white glyph) with optional title, description and actions below.
 */
export function SuccessHero({
  tone = 'success', icon = 'ti ti-check', title, description,
  className = '', children, ...rest
}) {
  ensureStyles();
  const cls = ['ht-successhero', `tone-${tone}`, className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      <div className="ht-successhero-ring">
        <div className="ht-successhero-disc"><i className={icon}></i></div>
      </div>
      {title || description ? (
        <div className="ht-successhero-copy">
          {title ? <div className="ht-successhero-title">{title}</div> : null}
          {description ? <div className="ht-successhero-desc">{description}</div> : null}
        </div>
      ) : null}
      {children}
    </div>
  );
}
