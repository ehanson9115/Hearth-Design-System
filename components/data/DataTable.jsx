import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'data-table');
  el.textContent = `
.ht-table{width:100%;border-collapse:collapse;font-family:var(--ht-font-sans);font-size:13px}
.ht-table th:first-child,.ht-table td:first-child{width:34%;min-width:180px}
.ht-table th{text-align:left;font-size:10.5px;font-weight:500;letter-spacing:0.07em;text-transform:uppercase;color:var(--ht-text-muted);padding:10px 18px 6px;white-space:nowrap}
.ht-table td{padding:11px 18px;border-top:1px solid var(--ht-grey-3);color:var(--ht-text);vertical-align:top}
.ht-table tbody tr:hover td{background:var(--ht-grey-2)}
.ht-table .ht-table--r{text-align:right;font-variant-numeric:tabular-nums}
.ht-table__name{font-weight:500;color:var(--ht-text-head);text-wrap:pretty}
.ht-table__sub{color:var(--ht-text-muted);font-size:12px;white-space:nowrap;font-variant-numeric:tabular-nums}
`;
  document.head.appendChild(el);
}

/**
 * Hearth data table — hairline rows, hover tint, right-aligned numerics.
 * columns: [{key, header, align:'left'|'right', width, render:(row)=>node}].
 * The first column is the identity column and is always the widest.
 * Compose Badge for status cells; use the name/sub helpers for stacked IDs.
 */
export function DataTable({ columns = [], rows = [], rowKey, className = '', ...rest }) {
  ensureStyles();
  const sized = columns.some((c) => c.width != null);
  return (
    <table className={['ht-table', className].filter(Boolean).join(' ')} {...rest}>
      {sized && <colgroup>{columns.map((c) => (
        <col key={c.key} style={c.width != null ? { width: typeof c.width === 'number' ? `${c.width}px` : c.width } : undefined} />
      ))}</colgroup>}
      <thead>
        <tr>{columns.map((c) => (
          <th key={c.key} className={c.align === 'right' ? 'ht-table--r' : ''}>{c.header}</th>
        ))}</tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={rowKey ? row[rowKey] : i}>
            {columns.map((c) => (
              <td key={c.key} className={c.align === 'right' ? 'ht-table--r' : ''}>
                {c.render ? c.render(row) : row[c.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/** Stacked primary name + muted sub-id for a table cell. */
export function DataTableName({ children, sub }) {
  return <><span className="ht-table__name">{children}</span>{sub && <><br /><span className="ht-table__sub">{sub}</span></>}</>;
}
DataTable.Name = DataTableName;
