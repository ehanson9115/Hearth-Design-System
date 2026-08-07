import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'file-upload');
  el.textContent = `
.ht-upload{font-family:var(--ht-font-sans);max-width:460px}
.ht-upload__hint{font-size:13px;color:var(--ht-text-muted);margin:0 0 8px;line-height:1.4}
.ht-upload__sources{display:flex;flex-direction:column;gap:8px}
.ht-source{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;height:46px;cursor:pointer;background:var(--ht-surface);border-radius:var(--ht-r-input);border:2px dashed rgba(76,30,168,0.35);color:var(--ht-action);font-family:inherit;font-size:14px;font-weight:500;transition:background 150ms,border-color 150ms}
.ht-source:hover{background:var(--ht-action-tint);border-color:var(--ht-action)}
.ht-source i{font-size:18px}
.ht-dropzone{display:flex;flex-direction:column;align-items:center;text-align:center;gap:8px;padding:20px 24px;cursor:pointer;background:var(--ht-surface);border-radius:var(--ht-r-input);border:2px dashed rgba(76,30,168,0.35);transition:background 150ms,border-color 150ms}
.ht-dropzone:hover{background:var(--ht-action-tint);border-color:var(--ht-action)}
.ht-dropzone__btn{font-size:14px;font-weight:500;color:var(--ht-action);background:var(--ht-surface);border:1px solid var(--ht-border);border-radius:var(--ht-r-card);padding:8px 16px;cursor:pointer;font-family:inherit}
.ht-dropzone__desc{font-size:13px;color:var(--ht-text-muted)}
.ht-filerow{display:flex;align-items:center;gap:8px;margin-top:10px;padding:10px 12px;background:var(--ht-surface);border-radius:var(--ht-r-input);border:1px solid var(--ht-hairline);font-size:14px}
.ht-filerow__ic{width:32px;height:32px;border-radius:var(--ht-r-input);background:var(--ht-action-tint);color:var(--ht-action);display:grid;place-items:center;flex-shrink:0}
.ht-filerow__name{font-weight:500;color:var(--ht-text-head);line-height:1.3}
.ht-filerow__meta{font-size:13px;color:var(--ht-text-muted)}
.ht-filerow__status{margin-left:auto;display:flex;align-items:center;gap:5px;color:var(--ht-green-text);font-size:13px;font-weight:500}
.ht-filerow__status i{color:var(--ht-green-vivid)}
.ht-filerow__remove{border:none;background:none;color:var(--ht-text-muted);cursor:pointer;font-size:15px;padding:4px}
`;
  document.head.appendChild(el);
}

/**
 * Default capture sources for mobile. Camera / Photos / Files — the pattern
 * residents expect when submitting a document photo from a phone. Module-local
 * data, not a component: it stays lowercase so the compiler doesn't publish it
 * on the component namespace.
 */
const uploadSources = [
  { icon: 'camera', label: 'Camera', value: 'camera' },
  { icon: 'photo', label: 'Photos', value: 'photo' },
  { icon: 'folder', label: 'Files', value: 'folder' },
];

/**
 * Hearth file upload. The default affordance is a stacked set of capture-source
 * buttons — Camera / Photos / Files — each a white surface with a dashed accent
 * border (never a grey fill). This is the rule for resident/mobile document
 * capture. Pass `sources={null}` to fall back to a single "Choose file"
 * dropzone (desktop / drag-and-drop). Uploaded rows use the vivid green check.
 */
export function FileUpload({
  sources = uploadSources,
  hint,
  accept = 'PDF, JPG, or PNG · up to 10 MB',
  buttonLabel = 'Choose file',
  onChoose,
  files = [],
  onRemove,
  className = '',
  ...rest
}) {
  ensureStyles();
  const stacked = Array.isArray(sources) && sources.length > 0;
  return (
    <div className={['ht-upload', className].filter(Boolean).join(' ')} {...rest}>
      {hint && <p className="ht-upload__hint">{hint}</p>}
      {stacked ? (
        <div className="ht-upload__sources">
          {sources.map((s) => (
            <button type="button" className="ht-source" key={s.value || s.label}
              onClick={onChoose ? () => onChoose(s.value || s.label) : undefined}>
              <i className={`ti ti-${s.icon}`} aria-hidden="true" />{s.label}
            </button>
          ))}
        </div>
      ) : (
        <div className="ht-dropzone" onClick={onChoose ? () => onChoose() : undefined} role="button" tabIndex={0}>
          <span className="ht-dropzone__btn">{buttonLabel}</span>
          <span className="ht-dropzone__desc">{accept}</span>
        </div>
      )}
      {files.map((f, i) => (
        <div className="ht-filerow" key={f.name + i}>
          <span className="ht-filerow__ic"><i className="ti ti-file" aria-hidden="true" /></span>
          <div>
            <div className="ht-filerow__name">{f.name}</div>
            {f.size && <div className="ht-filerow__meta">{f.size}</div>}
          </div>
          <span className="ht-filerow__status">
            <i className="ti ti-circle-check-filled" aria-hidden="true" />{f.status || 'Uploaded'}
          </span>
          <button className="ht-filerow__remove" type="button" aria-label={`Remove ${f.name}`}
            onClick={onRemove ? () => onRemove(f, i) : undefined}>✕</button>
        </div>
      ))}
    </div>
  );
}
