import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'hours-summary');
  el.textContent = `
.ht-hours{font-family:var(--ht-font-sans)}
.ht-hours__head{display:flex;align-items:flex-start;gap:10px;width:100%;background:none;border:0;padding:0;font-family:inherit;text-align:left;color:inherit}
.ht-hours__head--btn{cursor:pointer}
.ht-hours__title{font-size:17px;font-weight:500;color:var(--ht-text-head);line-height:1.3;margin:0}
.ht-hours__sub{font-size:14px;line-height:1.4;color:var(--ht-text-muted);margin:3px 0 0;text-wrap:pretty}
.ht-hours__total{margin-left:auto;padding-left:10px;font-size:17px;font-weight:500;color:var(--ht-text-head);white-space:nowrap}
.ht-hours__chev{margin-left:auto;padding-left:10px;flex-shrink:0;font-size:18px;color:var(--ht-text-muted);transition:transform 160ms}
.ht-hours__chev.is-open{transform:rotate(180deg)}
.ht-hours__body{display:flex;flex-direction:column;gap:10px;margin-top:12px}
`;
  document.head.appendChild(el);
}

/**
 * Hearth resident hours-summary section — a section header ("How your hours
 * add up:") over nested ActivityCards. Collapsible by default.
 */
export function HoursSummary({
  title = 'How your hours add up:',
  subtitle,
  total,
  collapsible = true,
  defaultOpen = true,
  children,
  className = '',
  ...rest
}) {
  ensureStyles();
  const [open, setOpen] = React.useState(defaultOpen);
  const shown = collapsible ? open : true;
  const Head = collapsible ? 'button' : 'div';
  return (
    <section className={['ht-hours', className].filter(Boolean).join(' ')} {...rest}>
      <Head
        className={['ht-hours__head', collapsible ? 'ht-hours__head--btn' : ''].filter(Boolean).join(' ')}
        type={collapsible ? 'button' : undefined}
        aria-expanded={collapsible ? shown : undefined}
        onClick={collapsible ? () => setOpen(v => !v) : undefined}
      >
        <div>
          <h2 className="ht-hours__title">{title}</h2>
          {subtitle && <p className="ht-hours__sub">{subtitle}</p>}
        </div>
        {total != null && <span className="ht-hours__total">{total}</span>}
        {collapsible && <i className={`ti ti-chevron-down ht-hours__chev${shown ? ' is-open' : ''}`} aria-hidden="true" />}
      </Head>
      {shown && <div className="ht-hours__body">{children}</div>}
    </section>
  );
}
