import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'transcript');
  el.textContent = `
.ht-tx{font-family:var(--ht-font-sans)}
.ht-tx__msg{padding:12px 18px 13px}
.ht-tx__msg + .ht-tx__msg{border-top:1px solid var(--ht-grey-3)}
.ht-tx__speaker{font-size:11px;font-weight:500;letter-spacing:0.07em;text-transform:uppercase;color:var(--ht-text-muted)}
.ht-tx__speaker--worker{color:var(--ht-action)}
.ht-tx__time{font-weight:400;letter-spacing:0.01em;text-transform:none;color:var(--ht-text-subtle);margin-left:6px}
.ht-tx__msg p{margin:3px 0 0;font-size:13px;line-height:1.5;color:var(--ht-text)}
.ht-tx__msg--flagged{background:var(--ht-amber-wash);border-radius:var(--ht-r-input);margin:3px 8px;padding:10px 12px 11px;border-top:none !important;box-shadow:inset 0 0 0 1px var(--ht-amber-vivid)}
.ht-tx__msg--flagged + .ht-tx__msg{border-top:none}
.ht-tx__flag{display:flex;align-items:center;gap:6px;margin-top:8px;padding:6px 10px;background:var(--ht-amber-note);border-radius:var(--ht-r-input);font-size:12.5px;font-weight:500;color:var(--ht-amber-text)}
.ht-tx__flag > i{font-size:14px;color:var(--ht-amber-icon)}
.ht-tx__flag button{margin-left:auto;font-size:12.5px;font-weight:500;color:var(--ht-action);background:none;border:none;cursor:pointer;text-decoration:underline;text-underline-offset:3px;font-family:inherit}
`;
  document.head.appendChild(el);
}

/**
 * Hearth live transcript — speaker + time + line, worker turns in violet.
 * Flagged turns follow the outlined status convention: near-white amber wash
 * with a vivid amber stroke, and the flag note inset on the mid tint. Drop
 * inside a Panel with `band live` — that band is the one ink moment on screen.
 * messages: [{speaker, worker, time, text, flag:{text, action}}].
 */
export function Transcript({ messages = [], onFlagAction, className = '', children, ...rest }) {
  ensureStyles();
  return (
    <div className={['ht-tx', className].filter(Boolean).join(' ')} {...rest}>
      {children || messages.map((m, i) => (
        <div className={m.flag ? 'ht-tx__msg ht-tx__msg--flagged' : 'ht-tx__msg'} key={i}>
          <div className={m.worker ? 'ht-tx__speaker ht-tx__speaker--worker' : 'ht-tx__speaker'}>
            {m.speaker}{m.time && <span className="ht-tx__time">{m.time}</span>}
          </div>
          <p>{m.text}</p>
          {m.flag && (
            <div className="ht-tx__flag">
              <i className="ti ti-alert-triangle" aria-hidden="true" />{m.flag.text}
              {m.flag.action && <button type="button" onClick={onFlagAction ? () => onFlagAction(m, i) : undefined}>{m.flag.action}</button>}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
