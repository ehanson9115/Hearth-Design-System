import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'field');
  el.textContent = `
.ht-field{font-family:var(--ht-font-sans);max-width:var(--ht-field-max,380px)}
.ht-field--full{max-width:none}
.ht-field__label{display:block;font-size:15px;font-weight:500;margin-bottom:6px;color:var(--ht-text-head)}
.ht-field__hint{font-size:13px;color:var(--ht-text-muted);line-height:1.4}
.ht-field__label + .ht-field__hint{margin:-3px 0 10px}
.ht-field__control + .ht-field__hint,.ht-field__wrap + .ht-field__hint{margin-top:8px}
.ht-field__control{width:100%;font-family:inherit;font-size:15px;height:40px;box-sizing:border-box;padding:0 14px;border-radius:var(--ht-r-input);border:1px solid var(--ht-border);background:var(--ht-field-fill,var(--ht-surface));color:var(--ht-text)}
.ht-field__control--tint{background:var(--ht-grey-1)}
.ht-field__control--white{background:var(--ht-surface)}
.ht-field__control::placeholder{color:var(--ht-text-subtle)}
.ht-field__control:focus{outline:none;border-color:var(--ht-action);box-shadow:var(--ht-ring) var(--ht-ring-color)}
textarea.ht-field__control{height:auto;padding:11px 14px;min-height:96px;line-height:1.5;resize:vertical}
.ht-field__control--invalid{border-color:var(--ht-red-vivid)}
.ht-field__control--invalid:focus{border-color:var(--ht-red-vivid);box-shadow:var(--ht-ring) var(--ht-ring-color-danger)}
.ht-field__wrap{position:relative}
select.ht-field__control{height:40px;padding-right:36px;appearance:none;-webkit-appearance:none;cursor:pointer}
.ht-field__wrap--select::after{content:'';position:absolute;right:14px;top:20px;width:9px;height:9px;border-right:2px solid var(--ht-text-muted);border-bottom:2px solid var(--ht-text-muted);transform:translateY(-70%) rotate(45deg);pointer-events:none}
.ht-field__err{display:flex;align-items:center;gap:6px;font-size:14px;font-weight:500;color:var(--ht-red-text);margin-top:6px}
.ht-field__err::before{content:'!';width:16px;height:16px;border-radius:999px;background:var(--ht-red-vivid);color:#fff;font-size:11px;font-weight:500;display:grid;place-content:center;flex-shrink:0}
.ht-field__count{font-size:13px;color:var(--ht-text-muted);margin-top:6px;text-align:right}
`;
  document.head.appendChild(el);
}

let _idc = 0;

/**
 * Hearth form field — label + optional hint + control + error, in one unit.
 * Renders an input, textarea, or select via `as`. 6px radius, violet focus,
 * fix-it error copy. Label sits 6px above; hint 8px below the control.
 * The control fill follows --ht-field-fill, which FieldGroup sets to a tint
 * so a contained input is never white-on-white; `fill` overrides per field.
 */
export function Input({
  label,
  hint,
  error,
  as = 'input',
  options,
  invalid,
  showCount,
  maxLength,
  value,
  id,
  fill,
  fullWidth = false,
  className = '',
  children,
  ...rest
}) {
  ensureStyles();
  const [uid] = React.useState(() => id || `ht-f-${++_idc}`);
  const isInvalid = invalid || !!error;
  const ctrlCls = ['ht-field__control', fill ? `ht-field__control--${fill}` : '', isInvalid ? 'ht-field__control--invalid' : ''].filter(Boolean).join(' ');
  const errId = `${uid}-err`;
  const common = {
    id: uid, value, maxLength, className: ctrlCls,
    'aria-invalid': isInvalid || undefined,
    'aria-describedby': error ? errId : undefined,
    ...rest,
  };

  let control;
  if (as === 'textarea') {
    control = <textarea {...common} />;
  } else if (as === 'select') {
    control = (
      <div className="ht-field__wrap ht-field__wrap--select">
        <select {...common}>
          {options ? options.map((o) => {
            const opt = typeof o === 'string' ? { value: o, label: o } : o;
            return <option key={opt.value} value={opt.value}>{opt.label}</option>;
          }) : children}
        </select>
      </div>
    );
  } else {
    control = <input {...common} />;
  }

  const count = showCount && maxLength != null
    ? `${maxLength - (value ? String(value).length : 0)} characters left` : null;

  return (
    <div className={['ht-field', fullWidth ? 'ht-field--full' : '', className].filter(Boolean).join(' ')}>
      {label && <label className="ht-field__label" htmlFor={uid}>{label}</label>}
      {hint && <p className="ht-field__hint">{hint}</p>}
      {control}
      {count && <p className="ht-field__count">{count}</p>}
      {error && <p className="ht-field__err" id={errId}>{error}</p>}
    </div>
  );
}
