import React from 'react';

const TONES = {
  action: { bg: 'var(--ht-action-tint)', fg: 'var(--ht-action)', solidBg: 'var(--ht-action)' },
  data: { bg: 'var(--ht-data-tint)', fg: 'var(--ht-data-text)', solidBg: 'var(--ht-data)' },
  success: { bg: 'var(--ht-green-bg)', fg: 'var(--ht-green-text)', solidBg: 'var(--ht-green-vivid)' },
  warning: { bg: 'var(--ht-amber-bg)', fg: 'var(--ht-amber-icon)', solidBg: 'var(--ht-amber-vivid)' },
  danger: { bg: 'var(--ht-red-wash)', fg: 'var(--ht-red-text)', solidBg: 'var(--ht-red-vivid)' },
};

/**
 * Hearth icon tile. The tinted chip a standalone glyph sits inside — 24px
 * rounded square by default (radius size/4, so 40px gets RecordCard's 10),
 * `circle` for avatars-of-things, `solid` for vivid fill + white glyph.
 * Decorative: aria-hidden; the neighboring text carries the meaning.
 */
export function IconTile({ icon, tone = 'action', solid = false, circle = false, size = 24, className = '', style, ...rest }) {
  const t = TONES[tone] || TONES.action;
  return (
    <span aria-hidden="true" className={className} {...rest} style={{
      width: size, height: size, flexShrink: 0,
      borderRadius: circle ? 999 : Math.round(size / 4),
      background: solid ? t.solidBg : t.bg,
      color: solid ? '#fff' : t.fg,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      ...style,
    }}>
      <i className={`ti ${icon}`} style={{ fontSize: Math.round(size * 0.58), lineHeight: 1 }} />
    </span>
  );
}
