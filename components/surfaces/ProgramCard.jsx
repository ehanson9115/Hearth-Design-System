import React from 'react';
import { Button } from '../core/Button.jsx';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'program-card');
  el.textContent = `
.ht-progcard{font-family:var(--ht-font-sans);display:flex;flex-direction:column;gap:12px;padding:16px 18px;background:var(--ht-surface);border-radius:var(--ht-r-xl);box-shadow:inset 0 0 0 1px var(--ht-hairline),var(--ht-shadow-float);box-sizing:border-box}
.ht-progcard.is-status{gap:8px;padding:8px 18px 16px}
.ht-progcard.tone-pending{box-shadow:inset 0 0 0 1px var(--ht-amber-vivid),var(--ht-shadow-float)}
.ht-progcard-head{display:flex;gap:12px;align-items:center}
.ht-progcard-logo{width:44px;height:44px;border-radius:50%;background:var(--ht-grey-3);box-shadow:inset 0 0 0 1px var(--ht-hairline);flex-shrink:0;display:grid;place-items:center;overflow:hidden;color:var(--ht-text-muted);font-size:20px}
.ht-progcard-logo>img{width:100%;height:100%;object-fit:cover}
.ht-progcard.is-status .ht-progcard-logo{width:32px;height:32px;font-size:16px}
.ht-progcard.tone-pending .ht-progcard-logo{background:var(--ht-amber-solid);color:var(--ht-amber-text)}
.ht-progcard-titles{display:flex;flex-direction:column;gap:2px;min-width:0}
.ht-progcard-title{font-size:17px;font-weight:500;letter-spacing:-0.005em;color:var(--ht-text-head);line-height:1.2}
.ht-progcard-sub{font-size:14px;font-weight:400;color:var(--ht-text-muted);line-height:1.25}
.ht-progcard-rule{height:1px;background:var(--ht-grey-3);align-self:stretch}
.ht-progcard-meta{display:flex;gap:10px;align-items:center;font-size:14px;color:var(--ht-text-muted);line-height:1.25}
.ht-progcard-meta>i{font-size:18px;line-height:1;flex-shrink:0}
.ht-progcard-cta{margin-top:2px;display:flex}
`;
  document.head.appendChild(el);
}

/**
 * Hearth program card — one benefit program, its eligibility facts, and at most
 * one CTA. Omit `ctaLabel` for the compact status form (no button).
 */
export function ProgramCard({
  logo, title, subtitle, meta = [], ctaLabel, ctaVariant = 'primary', onCta,
  tone = 'default', className = '', children, ...rest
}) {
  ensureStyles();
  const isStatus = !ctaLabel;
  const cls = ['ht-progcard', isStatus ? 'is-status' : '', tone !== 'default' ? `tone-${tone}` : '', className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      <div className="ht-progcard-head">
        <div className="ht-progcard-logo">{typeof logo === 'string' ? <i className={logo}></i> : logo}</div>
        <div className="ht-progcard-titles">
          <div className="ht-progcard-title">{title}</div>
          {subtitle ? <div className="ht-progcard-sub">{subtitle}</div> : null}
        </div>
      </div>
      <div className="ht-progcard-rule"></div>
      {meta.map((m, i) => (
        <div className="ht-progcard-meta" key={i}>
          {m.icon ? <i className={m.icon}></i> : null}
          <span>{m.label}</span>
        </div>
      ))}
      {children}
      {ctaLabel ? (
        <div className="ht-progcard-cta">
          <Button variant={ctaVariant} fullWidth onClick={onCta}>{ctaLabel}</Button>
        </div>
      ) : null}
    </div>
  );
}
