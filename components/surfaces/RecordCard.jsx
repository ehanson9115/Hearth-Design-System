import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'record-card');
  el.textContent = `
.ht-record{box-sizing:border-box;background:var(--ht-surface);border:1px solid var(--ht-hairline);border-radius:var(--ht-r-block);padding:16px;font-family:var(--ht-font-sans)}
.ht-record__head{display:flex;align-items:flex-start;gap:12px}
.ht-record__ic{box-sizing:border-box;width:40px;height:40px;border-radius:10px;flex-shrink:0;display:grid;place-content:center;font-size:19px;background:var(--ht-action-tint);color:var(--ht-action)}
.ht-record__title{font-size:17px;font-weight:500;color:var(--ht-text-head);line-height:1.3;margin:0}
.ht-record__sub{font-size:14px;line-height:1.4;color:var(--ht-text-muted);margin:1px 0 0}
.ht-record__meta{display:flex;flex-direction:column;gap:6px;margin-top:12px}
.ht-record__row{display:flex;align-items:flex-start;gap:9px;font-size:14px;line-height:1.45;color:var(--ht-text)}
.ht-record__row i{font-size:15px;color:var(--ht-text-subtle);flex-shrink:0;margin-top:1px}
.ht-record__rule{height:1px;background:var(--ht-grey-3);margin:14px -16px}
.ht-record__foot{display:flex;align-items:center;gap:10px}
.ht-record__confirm{display:flex;align-items:center;gap:10px;font-size:15px;font-weight:500;color:var(--ht-text-head);background:none;border:0;padding:0;font-family:inherit;cursor:pointer;text-align:left}
.ht-record__box{box-sizing:border-box;width:18px;height:18px;border-radius:4px;flex-shrink:0;background:var(--ht-grey-0);box-shadow:inset 0 0 0 1px var(--ht-border);display:grid;place-content:center;color:transparent}
.ht-record__confirm.is-on .ht-record__box{background:var(--ht-green-vivid);box-shadow:none;color:#fff}
.ht-record__confirm:focus-visible{outline:none;box-shadow:var(--ht-ring) var(--ht-ring-color);border-radius:4px}
.ht-record__acts{margin-left:auto;display:flex;align-items:center;gap:14px}
.ht-record__act{display:inline-flex;align-items:center;gap:5px;font-size:14px;font-weight:500;font-family:inherit;background:none;border:0;padding:0;cursor:pointer;color:var(--ht-data-text);text-decoration:underline;text-underline-offset:3px}
.ht-record__act--danger{color:var(--ht-red-text)}
.ht-record__act:focus-visible{outline:none;box-shadow:var(--ht-ring) var(--ht-ring-color);border-radius:4px}
`;
  document.head.appendChild(el);
}

const Tick = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2.5 6.5 L5 9 L9.5 3.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Hearth record card — one reported item (a job, an address, a household
 * member) laid out for confirm-or-correct review. Icon tile + title/subtitle,
 * icon-led detail rows, then a confirm checkbox with Edit / Remove.
 * details: [{icon, text}].
 */
export function RecordCard({
  icon = 'ti-building',
  title,
  subtitle,
  details = [],
  confirmLabel = 'This is still correct',
  confirmed = false,
  onConfirm,
  onEdit,
  onRemove,
  editLabel = 'Edit',
  removeLabel = 'Remove',
  className = '',
  ...rest
}) {
  ensureStyles();
  const showFoot = onConfirm || onEdit || onRemove;
  return (
    <div className={['ht-record', className].filter(Boolean).join(' ')} {...rest}>
      <div className="ht-record__head">
        <span className="ht-record__ic"><i className={'ti ' + icon} aria-hidden="true" /></span>
        <div>
          <h3 className="ht-record__title">{title}</h3>
          {subtitle && <p className="ht-record__sub">{subtitle}</p>}
        </div>
      </div>
      {details.length > 0 && (
        <div className="ht-record__meta">
          {details.map((d, i) => (
            <div className="ht-record__row" key={i}>
              {d.icon && <i className={'ti ' + d.icon} aria-hidden="true" />}
              <span>{d.text}</span>
            </div>
          ))}
        </div>
      )}
      {showFoot && <div className="ht-record__rule" />}
      {showFoot && (
        <div className="ht-record__foot">
          {onConfirm && (
            <button
              type="button"
              className={['ht-record__confirm', confirmed ? 'is-on' : ''].filter(Boolean).join(' ')}
              aria-pressed={confirmed}
              onClick={() => onConfirm(!confirmed)}
            >
              <span className="ht-record__box">{confirmed ? <Tick /> : null}</span>
              {confirmLabel}
            </button>
          )}
          <div className="ht-record__acts">
            {onEdit && <button type="button" className="ht-record__act" onClick={onEdit}>{editLabel}</button>}
            {onRemove && (
              <button type="button" className="ht-record__act ht-record__act--danger" onClick={onRemove}>
                {removeLabel}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
