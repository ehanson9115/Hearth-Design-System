import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'review-tile');
  el.textContent = `
.ht-review{background:var(--ht-surface);border:1px solid var(--ht-hairline);border-radius:var(--ht-r-input);overflow:hidden;font-family:var(--ht-font-sans)}
.ht-review__head{display:flex;align-items:baseline;justify-content:space-between;background:var(--ht-head-zone);border-bottom:1px solid var(--ht-grey-3);padding:11px 16px 9px}
.ht-review__head h4{font-size:15px;font-weight:500;color:var(--ht-text-head);margin:0}
.ht-review__edit{font-size:13px;font-weight:500;color:var(--ht-data-text);text-decoration:underline;text-underline-offset:3px;background:none;border:none;cursor:pointer;font-family:inherit;padding:0}
.ht-review__row{margin:0 0 4px;padding:0 16px;font-size:14px;line-height:1.5}
.ht-review__row:first-of-type{padding-top:11px}
.ht-review__row:last-child{margin-bottom:0;padding-bottom:13px}
.ht-review__k{color:var(--ht-text-muted)}
.ht-review__v{color:var(--ht-text);font-weight:500}
.ht-review__v--missing{color:var(--ht-red-text)}
`;
  document.head.appendChild(el);
}

/**
 * Hearth review tile — a "review your answers" group: header zone with an Edit
 * link + colon-format key/value rows. Missing values render in danger text.
 * items: [{label, value, missing}].
 */
export function ReviewTile({ title, editHref, onEdit, items = [], className = '', children, ...rest }) {
  ensureStyles();
  return (
    <div className={['ht-review', className].filter(Boolean).join(' ')} {...rest}>
      <div className="ht-review__head">
        <h4>{title}</h4>
        {(editHref || onEdit) && (editHref
          ? <a className="ht-review__edit" href={editHref}>Edit</a>
          : <button className="ht-review__edit" type="button" onClick={onEdit}>Edit</button>)}
      </div>
      {children || items.map((it, i) => (
        <p className="ht-review__row" key={i}>
          <span className="ht-review__k">{it.label}:</span>{' '}
          <span className={['ht-review__v', it.missing ? 'ht-review__v--missing' : ''].filter(Boolean).join(' ')}>{it.value}</span>
        </p>
      ))}
    </div>
  );
}
