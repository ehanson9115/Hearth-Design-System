import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'option-card');
  el.textContent = `
.ht-choice{display:flex;gap:8px;padding:12px 16px;border-radius:var(--ht-r-input);cursor:pointer;background:var(--ht-surface);box-shadow:0 0 0 1px var(--ht-border);transition:box-shadow 150ms,background 150ms;font-family:var(--ht-font-sans)}
.ht-choice:hover{box-shadow:0 0 0 1px var(--ht-action)}
.ht-choice.is-selected{background:var(--ht-action-tint);box-shadow:0 0 0 1px var(--ht-action)}
.ht-choice__ind{width:18px;height:18px;border-radius:999px;background:var(--ht-grey-1);box-shadow:inset 0 0 0 1px var(--ht-border);display:grid;place-content:center;flex-shrink:0;margin-top:2px}
.ht-choice.is-selected .ht-choice__ind{background:var(--ht-action);box-shadow:none}
.ht-choice.is-selected .ht-choice__ind::after{content:'';width:7px;height:7px;border-radius:999px;background:#fff}
.ht-choice--checkbox .ht-choice__ind{border-radius:5px}
.ht-choice--checkbox.is-selected .ht-choice__ind::after{width:10px;height:10px;border-radius:0;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E") center/contain no-repeat}
.ht-choice__title{font-size:15px;font-weight:500;line-height:1.4;color:var(--ht-text-head)}
.ht-choice__desc{font-size:14px;font-weight:400;color:var(--ht-text-muted);line-height:1.4}
.ht-choice.is-selected .ht-choice__title{color:var(--ht-primary-dark)}
.ht-choice.is-selected .ht-choice__desc{color:color-mix(in srgb,var(--ht-action) 65%,#6B7280)}
`;
  document.head.appendChild(el);
}

/**
 * Hearth option card — a tap-target radio or checkbox choice. Selected state
 * is a violet tint + 1px violet stroke (the purple carries the state, so the
 * ring stays light).
 */
export function OptionCard({
  type = 'radio',
  selected = false,
  title,
  description,
  name,
  value,
  onSelect,
  className = '',
  children,
  ...rest
}) {
  ensureStyles();
  const cls = [
    'ht-choice',
    type === 'checkbox' ? 'ht-choice--checkbox' : '',
    selected ? 'is-selected' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <label
      className={cls}
      role={type}
      aria-checked={selected}
      onClick={onSelect ? () => onSelect(value) : undefined}
      {...rest}
    >
      <span className="ht-choice__ind" aria-hidden="true" />
      <span>
        <span className="ht-choice__title">{title}</span>
        {description && <div className="ht-choice__desc">{description}</div>}
        {children}
      </span>
    </label>
  );
}
