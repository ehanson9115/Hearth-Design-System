import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'checklist-row');
  el.textContent = `
.ht-check{display:flex;gap:10px;align-items:flex-start;padding:12px 18px;font-size:13px;cursor:pointer;font-family:var(--ht-font-sans);color:var(--ht-text)}
.ht-check + .ht-check,:has(>.ht-check) + :has(>.ht-check) > .ht-check{border-top:1px solid var(--ht-grey-3)}
.ht-check:hover{background:var(--ht-grey-2)}
.ht-check__box{width:17px;height:17px;border-radius:5px;background:var(--ht-grey-1);box-shadow:inset 0 0 0 1px var(--ht-border);flex-shrink:0;margin-top:1px;display:grid;place-content:center}
.ht-check__box i{font-size:12px;line-height:1}
.ht-check.is-done .ht-check__box{background:var(--ht-green-vivid);box-shadow:none;color:#fff}
.ht-check.is-done .ht-check__txt{color:var(--ht-text-muted);text-decoration:line-through}
.ht-check__num{width:19px;height:19px;border-radius:999px;background:var(--ht-data-mid);color:var(--ht-data-text);font-size:11px;font-weight:500;display:grid;place-content:center;flex-shrink:0;margin-top:1px}
`;
  document.head.appendChild(el);
}

/**
 * Hearth checklist row. Two kinds: a numbered follow-up question (`number`)
 * or a checkbox document row (default; `done` strikes it through with a vivid
 * green Tabler check — never a ✓ text glyph). Stack rows directly inside a Panel — borders auto-divide.
 */
export function ChecklistRow({ number, done = false, children, onClick, className = '', ...rest }) {
  ensureStyles();
  const cls = ['ht-check', done ? 'is-done' : '', className].filter(Boolean).join(' ');
  return (
    <div className={cls} onClick={onClick} {...rest}>
      {number != null
        ? <span className="ht-check__num" aria-hidden="true">{number}</span>
        : (
          <span className="ht-check__box" aria-hidden="true">
            {done ? <i className="ti ti-check" /> : null}
          </span>
        )}
      <span className="ht-check__txt">{children}</span>
    </div>
  );
}
