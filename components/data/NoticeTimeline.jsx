import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'notice-timeline');
  el.textContent = `
.ht-notices{box-sizing:border-box;background:var(--ht-surface);border:1px solid var(--ht-hairline);border-radius:var(--ht-r-block);overflow:hidden;font-family:var(--ht-font-sans);box-shadow:var(--ht-shadow-sm)}
.ht-notices__head{display:flex;align-items:center;gap:10px;width:100%;padding:13px 16px;background:var(--ht-head-zone);border:0;border-bottom:1px solid var(--ht-grey-3);font-family:inherit;text-align:left;cursor:pointer;color:inherit}
.ht-notices__head--static{cursor:default}
.ht-notices__head > i:first-child{font-size:17px;color:var(--ht-action);flex-shrink:0}
.ht-notices__title{font-size:15px;font-weight:500;color:var(--ht-text-head);margin:0}
.ht-notices__chev{margin-left:auto;font-size:17px;color:var(--ht-text-muted);transition:transform 160ms}
.ht-notices__chev.is-open{transform:rotate(180deg)}
.ht-notices__body{padding:16px}
.ht-notices__item{position:relative;padding:0 0 18px 22px}
.ht-notices__item:last-child{padding-bottom:0}
.ht-notices__item::before{content:'';position:absolute;left:3px;top:5px;width:10px;height:10px;border-radius:999px;background:var(--ht-grey-4)}
.ht-notices__item.is-latest::before{background:var(--ht-action)}
.ht-notices__item::after{content:'';position:absolute;left:7.5px;top:19px;bottom:0;width:1px;background:var(--ht-grey-3)}
.ht-notices__item:last-child::after{display:none}
.ht-notices__t{font-size:15px;font-weight:500;color:var(--ht-text-head);line-height:1.3;margin:0}
.ht-notices__when{display:flex;align-items:center;gap:6px;flex-wrap:wrap;font-size:13px;color:var(--ht-text-muted);margin-top:3px}
.ht-notices__chan{display:inline-flex;align-items:center;gap:4px;color:var(--ht-text-muted)}
.ht-notices__chan i{font-size:14px}
.ht-notices__body-txt{font-size:14px;line-height:1.5;color:var(--ht-text);margin:6px 0 0;text-wrap:pretty}
`;
  document.head.appendChild(el);
}

const CHANNEL_ICON = { email: 'ti-mail', sms: 'ti-message', portal: 'ti-bell', mail: 'ti-mailbox', phone: 'ti-phone' };

/**
 * Hearth notice timeline — the record of what the agency sent and when.
 * Collapsible card header with a count, then a dotted rail of notices; the
 * newest carries the violet dot. items: [{title, when, channel, body}].
 */
export function NoticeTimeline({
  title = 'Notice history',
  icon = 'ti-bell',
  items = [],
  collapsible = true,
  defaultOpen = true,
  showCount = true,
  className = '',
  ...rest
}) {
  ensureStyles();
  const [open, setOpen] = React.useState(defaultOpen);
  const shown = collapsible ? open : true;
  const Head = collapsible ? 'button' : 'div';
  return (
    <section className={['ht-notices', className].filter(Boolean).join(' ')} {...rest}>
      <Head
        className={['ht-notices__head', collapsible ? '' : 'ht-notices__head--static'].filter(Boolean).join(' ')}
        type={collapsible ? 'button' : undefined}
        aria-expanded={collapsible ? shown : undefined}
        onClick={collapsible ? () => setOpen(v => !v) : undefined}
      >
        {icon && <i className={'ti ' + icon} aria-hidden="true" />}
        <h3 className="ht-notices__title">{title}{showCount && items.length > 0 ? ' (' + items.length + ')' : ''}</h3>
        {collapsible && <i className={'ti ti-chevron-down ht-notices__chev' + (shown ? ' is-open' : '')} aria-hidden="true" />}
      </Head>
      {shown && (
        <div className="ht-notices__body">
          {items.map((it, i) => {
            const ch = typeof it.channel === 'string' ? { label: it.channel } : it.channel;
            const chIcon = ch && (ch.icon || CHANNEL_ICON[String(ch.label).toLowerCase()]);
            return (
              <article className={['ht-notices__item', i === 0 ? 'is-latest' : ''].filter(Boolean).join(' ')} key={i}>
                <h4 className="ht-notices__t">{it.title}</h4>
                <div className="ht-notices__when">
                  {it.when && <span>{it.when}</span>}
                  {it.when && ch && <span aria-hidden="true">&middot;</span>}
                  {ch && (
                    <span className="ht-notices__chan">
                      {chIcon && <i className={'ti ' + chIcon} aria-hidden="true" />}{ch.label}
                    </span>
                  )}
                </div>
                {it.body && <p className="ht-notices__body-txt">{it.body}</p>}
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
