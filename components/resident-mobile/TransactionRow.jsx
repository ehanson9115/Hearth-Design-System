import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'transaction-row');
  el.textContent = `
.ht-txrow{display:flex;align-items:flex-start;gap:10px;padding:12px 0;font-family:var(--ht-font-sans)}
.ht-txrow + .ht-txrow{border-top:1px solid var(--ht-grey-3)}
.ht-txrow__ic{width:24px;height:24px;border-radius:6px;flex-shrink:0;display:grid;place-content:center;font-size:14px;background:var(--ht-grey-3);color:var(--ht-text-muted)}
.ht-txrow__title{font-size:14px;font-weight:500;color:var(--ht-text-head);line-height:1.35;margin:0}
.ht-txrow__meta{font-size:13px;font-weight:400;color:var(--ht-text-muted);line-height:1.35;margin:1px 0 0}
.ht-txrow__end{margin-left:auto;padding-left:10px;text-align:right;flex-shrink:0}
.ht-txrow__amount{font-size:14px;font-weight:500;color:var(--ht-text-head);line-height:1.35}
.ht-txrow__status{font-size:13px;font-weight:500;line-height:1.3;margin-top:1px}
.ht-txrow__status--settled{color:var(--ht-green-text)}
.ht-txrow__status--pending{color:var(--ht-amber-text)}
`;
  document.head.appendChild(el);
}

/**
 * Hearth transaction row — one purchase or deposit: small rounded-square
 * icon chip (24px, r6, top-aligned — never a large circle), store/date +
 * quiet meta, right-aligned amount over an AA status word (Settled green /
 * Pending amber). Stack rows — hairlines auto-divide.
 */
export function TransactionRow({
  icon = 'ti-shopping-cart',
  title,
  meta,
  amount,
  status = 'settled',
  statusLabel,
  onClick,
  className = '',
  ...rest
}) {
  ensureStyles();
  const label = statusLabel != null ? statusLabel : (status === 'pending' ? 'Pending' : 'Settled');
  return (
    <div
      className={['ht-txrow', className].filter(Boolean).join(' ')}
      onClick={onClick}
      style={onClick ? { cursor: 'pointer' } : undefined}
      {...rest}
    >
      <span className="ht-txrow__ic"><i className={`ti ${icon}`} aria-hidden="true" /></span>
      <span>
        <h3 className="ht-txrow__title">{title}</h3>
        {meta && <p className="ht-txrow__meta">{meta}</p>}
      </span>
      <span className="ht-txrow__end">
        <div className="ht-txrow__amount">{amount}</div>
        {label && <div className={`ht-txrow__status ht-txrow__status--${status}`}>{label}</div>}
      </span>
    </div>
  );
}
