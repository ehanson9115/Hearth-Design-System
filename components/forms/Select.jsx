import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'select');
  el.textContent = `
.ht-select{position:relative;font-family:var(--ht-font-sans);width:100%}
.ht-select-btn{width:100%;min-height:48px;box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:0 13px;border:none;border-radius:var(--ht-r-input);background:var(--ht-input-bg);box-shadow:inset 0 0 0 1px var(--ht-border);font-family:inherit;font-size:15px;font-weight:400;color:var(--ht-text);text-align:left;cursor:pointer;transition:box-shadow 140ms}
.ht-select-btn:hover:not(:disabled){box-shadow:inset 0 0 0 1px var(--ht-border-strong)}
.ht-select-btn:focus-visible{outline:none;box-shadow:inset 0 0 0 1px var(--ht-action),var(--ht-ring) var(--ht-ring-color)}
.ht-select.is-open .ht-select-btn{box-shadow:inset 0 0 0 1px var(--ht-action),var(--ht-ring) var(--ht-ring-color)}
.ht-select.is-placeholder .ht-select-btn{color:var(--ht-text-subtle)}
.ht-select.is-invalid .ht-select-btn{box-shadow:inset 0 0 0 1px var(--ht-red-vivid)}
.ht-select-btn:disabled{background:var(--ht-grey-2);color:var(--ht-text-subtle);cursor:not-allowed;box-shadow:inset 0 0 0 1px var(--ht-hairline)}
.ht-select-chev{flex-shrink:0;color:var(--ht-text-muted);transition:transform 140ms}
.ht-select.is-open .ht-select-chev{transform:rotate(180deg)}
.ht-select-menu{position:absolute;z-index:40;top:calc(100% + 6px);left:0;right:0;max-height:264px;overflow-y:auto;margin:0;padding:6px;list-style:none;background:var(--ht-surface);border-radius:var(--ht-r-card);box-shadow:inset 0 0 0 1px var(--ht-hairline),var(--ht-shadow-lg)}
.ht-select-opt{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:40px;padding:0 10px;border-radius:var(--ht-r-input);font-size:15px;color:var(--ht-text);cursor:pointer}
.ht-select-opt[aria-selected="true"]{background:var(--ht-action-select);color:var(--ht-primary-dark)}
.ht-select-opt.is-cursor:not([aria-selected="true"]){background:var(--ht-grey-2)}
.ht-select-opt>i{font-size:16px;flex-shrink:0}
`;
  document.head.appendChild(el);
}

const norm = (o) => (typeof o === 'string' ? { value: o, label: o } : o);

/**
 * Hearth select — the bare 48px dropdown control. Wrap in Input for a
 * label, hint or error; use standalone inside toolbars and filter rows.
 */
export function Select({
  options = [], value, defaultValue, onChange, placeholder = 'Select…',
  disabled = false, invalid = false, id, className = '', ...rest
}) {
  ensureStyles();
  const opts = options.map(norm);
  const [open, setOpen] = React.useState(false);
  const [inner, setInner] = React.useState(defaultValue ?? null);
  const [cursor, setCursor] = React.useState(0);
  const wrap = React.useRef(null);
  const current = value !== undefined ? value : inner;
  const selected = opts.find((o) => o.value === current);

  React.useEffect(() => {
    if (!open) return;
    const away = (e) => { if (wrap.current && !wrap.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', away);
    return () => document.removeEventListener('mousedown', away);
  }, [open]);

  const pick = (opt) => {
    if (value === undefined) setInner(opt.value);
    onChange && onChange(opt.value);
    setOpen(false);
  };

  const onKeyDown = (e) => {
    if (disabled) return;
    if (e.key === 'Escape') { setOpen(false); return; }
    if (!open && (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown')) {
      e.preventDefault();
      setCursor(Math.max(0, opts.findIndex((o) => o.value === current)));
      setOpen(true);
      return;
    }
    if (!open) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setCursor((c) => Math.min(opts.length - 1, c + 1)); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setCursor((c) => Math.max(0, c - 1)); }
    if (e.key === 'Enter') { e.preventDefault(); opts[cursor] && pick(opts[cursor]); }
  };

  const cls = ['ht-select', open ? 'is-open' : '', selected ? '' : 'is-placeholder', invalid ? 'is-invalid' : '', className].filter(Boolean).join(' ');
  return (
    <div className={cls} ref={wrap} {...rest}>
      <button type="button" id={id} className="ht-select-btn" disabled={disabled}
        aria-haspopup="listbox" aria-expanded={open} aria-invalid={invalid || undefined}
        onClick={() => { setCursor(Math.max(0, opts.findIndex((o) => o.value === current))); setOpen((o) => !o); }}
        onKeyDown={onKeyDown}>
        <span>{selected ? selected.label : placeholder}</span>
        <svg className="ht-select-chev" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </button>
      {open ? (
        <ul className="ht-select-menu" role="listbox" tabIndex={-1}>
          {opts.map((o, i) => (
            <li key={o.value} role="option" aria-selected={o.value === current}
              className={['ht-select-opt', i === cursor ? 'is-cursor' : ''].filter(Boolean).join(' ')}
              onMouseEnter={() => setCursor(i)} onClick={() => pick(o)}>
              <span>{o.label}</span>
              {o.value === current ? <i className="ti ti-check"></i> : null}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
