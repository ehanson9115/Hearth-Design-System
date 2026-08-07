import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'hero');
  el.textContent = `
.ht-hero{background:var(--ht-hero-gradient);border-radius:var(--ht-r-block);padding:28px 26px;font-family:var(--ht-font-sans);color:#fff}
.ht-hero__title{font-size:22px;font-weight:500;letter-spacing:-0.005em;margin:0 0 5px;color:#fff}
.ht-hero__sub{color:#E4DEF8;font-size:14px;margin:0}
`;
  document.head.appendChild(el);
}

/**
 * Hearth hero — the violet→royal gradient welcome block. The only gradient in
 * the system; use sparingly (one welcome moment per screen). Headline is
 * 500-weight — light text on dark reads optically bolder.
 */
export function Hero({ title, children, className = '', ...rest }) {
  ensureStyles();
  return (
    <div className={['ht-hero', className].filter(Boolean).join(' ')} {...rest}>
      {title && <h2 className="ht-hero__title">{title}</h2>}
      {children && <p className="ht-hero__sub">{children}</p>}
    </div>
  );
}
