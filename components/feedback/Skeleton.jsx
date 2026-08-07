import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'skeleton');
  el.textContent = `
.ht-skeleton{max-width:460px}
.ht-skeleton__row{height:14px;border-radius:999px;background:var(--ht-grey-4);margin-bottom:10px;animation:ht-pulse 1.4s ease-in-out infinite}
.ht-skeleton__row:last-child{margin-bottom:0}
@keyframes ht-pulse{0%,100%{opacity:1}50%{opacity:.45}}
`;
  document.head.appendChild(el);
}

/**
 * Hearth skeleton loader — a few pulsing lines standing in for content while
 * it loads. Rows shrink and stagger for a natural feel.
 */
export function Skeleton({ rows = 3, widths, className = '', ...rest }) {
  ensureStyles();
  const defaults = ['100%', '82%', '64%'];
  return (
    <div className={['ht-skeleton', className].filter(Boolean).join(' ')} aria-hidden="true" {...rest}>
      {Array.from({ length: rows }).map((_, i) => (
        <div className="ht-skeleton__row" key={i}
          style={{ width: (widths && widths[i]) || defaults[i] || `${Math.max(50, 100 - i * 12)}%`, animationDelay: `${i * 0.15}s` }} />
      ))}
    </div>
  );
}
