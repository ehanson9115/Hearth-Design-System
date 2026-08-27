import React from 'react';

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-ht', 'dark-header');
  el.textContent = `
.ht-inkhead{background:var(--ht-ink-surface);color:#fff;display:flex;align-items:center;gap:12px;padding:12px 20px;font-family:var(--ht-font-sans)}
.ht-inkhead--rounded{border-radius:var(--ht-r-card)}
.ht-inkhead__logo{width:26px;height:26px;border-radius:var(--ht-r-input);background:var(--ht-action);display:grid;place-content:center;color:#fff;font-size:14px;flex-shrink:0}
/* A product mark carries its own ground, so it replaces the violet chip rather
 * than sitting on it — no fill, no radius of our own. */
.ht-inkhead__logo--mark{background:none;border-radius:0;width:auto;height:auto}
.ht-inkhead__name{font-size:14px;font-weight:500}
.ht-inkhead__role{font-size:13px;color:var(--ht-on-ink-subtle)}
.ht-inkhead__nav{margin-left:auto;display:flex;align-items:center;gap:18px}
.ht-inkhead__link{font-size:13px;color:var(--ht-on-ink-muted);text-decoration:none;background:none;border:none;cursor:pointer;font-family:inherit;padding:0}
.ht-inkhead__link:hover,.ht-inkhead__link.is-active{color:#fff}
.ht-inkhead__link.is-active{font-weight:500}
.ht-inkhead__ghost{font-size:13px;font-weight:500;color:#fff;background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.25);border-radius:var(--ht-r-card);padding:6px 14px;cursor:pointer;font-family:inherit}
.ht-inkhead__ghost:hover{background:rgba(255,255,255,0.2)}
`;
  document.head.appendChild(el);
}

/**
 * The Healthy Together mark — the product icon, not a generic glyph. Vector so
 * it stays crisp at the header's 26px; extracted from the master logo lockup
 * (`HT Logo.svg`) by dropping the wordmark and cropping the viewBox to the
 * 51-unit icon box. It carries its own white ground, so it is NOT placed on
 * the violet chip.
 *
 * Apps on another brand pass their own node via `logo`, or a Tabler glyph via
 * `logoIcon` — this is only the default.
 */
export function HTMark({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 51 51" fill="none" aria-hidden="true">
      <g clipPath="url(#clip0_htmark)">
      <rect width="51" height="51" rx="25.5" fill="white" />
      <circle cx="25.5" cy="25.5" r="25.5" fill="white" />
      <path d="M5.22656 15.6885C9.39918 15.6886 11.3205 20.677 13.582 26.5488C16.046 32.9462 18.9139 40.3925 25.5371 43.5791C29.39 45.4327 34.6003 46.4188 39.3037 46.9424C35.325 49.509 30.5869 51 25.5 51C11.4167 51 0 39.5833 0 25.5C2.0024e-07 22.7643 0.432015 20.1295 1.22949 17.6592C2.35798 16.4239 3.64517 15.6885 5.22656 15.6885Z" fill="#9EEDFE" />
      <path d="M5.22656 15.6885C9.39918 15.6886 11.3205 20.677 13.582 26.5488C16.046 32.9462 18.9139 40.3925 25.5371 43.5791C29.39 45.4327 34.6003 46.4188 39.3037 46.9424C35.325 49.509 30.5869 51 25.5 51C11.4167 51 0 39.5833 0 25.5C2.0024e-07 22.7643 0.432015 20.1295 1.22949 17.6592C2.35798 16.4239 3.64517 15.6885 5.22656 15.6885Z" fill="url(#paint0_linear_htmark)" />
      <path d="M22.0352 33.668C27.5034 33.668 30.5436 35.865 34.2363 38.5332C36.6489 40.2764 39.3406 42.2194 43.1689 43.8838C38.5857 48.2899 32.3598 51 25.5 51C17.4284 50.9999 10.2339 47.2487 5.56152 41.3955C7.15811 40.4213 8.53358 39.426 9.83008 38.4873C13.4682 35.8532 16.4867 33.668 22.0352 33.668Z" fill="url(#paint1_linear_htmark)" />
      <g filter="url(#filter0_di_htmark)">
      <path d="M32.6719 28.4883C32.8973 28.4883 33.2193 28.3375 33.4554 28.1975C39.4983 24.3206 43.3301 19.8082 43.3301 15.2205C43.3301 11.4081 40.7219 8.71582 37.3516 8.71582C35.2586 8.71582 33.6486 9.87891 32.6719 11.6558C31.7166 9.88968 30.0851 8.71582 27.9921 8.71582C24.6219 8.71582 22.0137 11.4081 22.0137 15.2205C22.0137 19.8082 25.8455 24.3206 31.8991 28.1975C32.1245 28.3375 32.4465 28.4883 32.6719 28.4883Z" fill="url(#paint2_linear_htmark)" />
      </g>
      </g>
      <defs>
      <filter id="filter0_di_htmark" x="17.0332" y="5.72754" width="31.2773" height="29.7334" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feOffset dy="1.99219" />
      <feGaussianBlur stdDeviation="2.49023" />
      <feColorMatrix type="matrix" values="0 0 0 0 0.98678 0 0 0 0 0.49322 0 0 0 0 0.938305 0 0 0 0.2 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_htmark" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_htmark" result="shape" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feOffset />
      <feGaussianBlur stdDeviation="0.224121" />
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
      <feColorMatrix type="matrix" values="0 0 0 0 0.980392 0 0 0 0 0.223529 0 0 0 0 0.223529 0 0 0 1 0" />
      <feBlend mode="normal" in2="shape" result="effect2_innerShadow_htmark" />
      </filter>
      <linearGradient id="paint0_linear_htmark" x1="13.3475" y1="61.8076" x2="4.50716" y2="12.5234" gradientUnits="userSpaceOnUse">
      <stop stopColor="#4541FE" />
      <stop offset="0.717933" stopColor="#41DCFE" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="paint1_linear_htmark" x1="23.5125" y1="52.1281" x2="27.6829" y2="34.3425" gradientUnits="userSpaceOnUse">
      <stop stopColor="#4541FE" />
      <stop offset="0.975281" stopColor="#41DCFE" stopOpacity="0.5" />
      </linearGradient>
      <linearGradient id="paint2_linear_htmark" x1="34.9112" y1="36.6501" x2="47.4644" y2="14.5516" gradientUnits="userSpaceOnUse">
      <stop stopColor="#F919E3" />
      <stop offset="1" stopColor="#FA3939" />
      </linearGradient>
      <clipPath id="clip0_htmark">
      <rect width="51" height="51" rx="25.5" fill="white" />
      </clipPath>
      </defs>
    </svg>
  );
}

/**
 * Hearth admin dark header (violet ink). Admin app only — resident stays
 * light. The brand moment is the product mark itself (`HTMark` by default) —
 * pass `logo` for another brand's mark, or `logoIcon` for a Tabler glyph, which
 * falls back to the solid-violet chip. Buttons on ink are always ghost, never
 * violet-on-ink. This is one of the
 * screen's ink moments — pair carefully with a live band.
 * nav: [{label, active, href|onClick}].
 */
export function DarkHeader({
  name = 'Healthy Together',
  role,
  logo,
  logoIcon,
  nav = [],
  action,
  onAction,
  rounded = false,
  className = '',
  children,
  ...rest
}) {
  ensureStyles();
  return (
    <header className={['ht-inkhead', rounded ? 'ht-inkhead--rounded' : '', className].filter(Boolean).join(' ')} {...rest}>
      <span className={logoIcon ? 'ht-inkhead__logo' : 'ht-inkhead__logo ht-inkhead__logo--mark'}>
        {logoIcon ? <i className={`ti ${logoIcon}`} aria-hidden="true" /> : (logo || <HTMark />)}
      </span>
      <span className="ht-inkhead__name">{name}</span>
      {role && <span className="ht-inkhead__role">{role}</span>}
      <nav className="ht-inkhead__nav">
        {nav.map((n, i) => {
          const Tag = n.href ? 'a' : 'button';
          return (
            <Tag key={i} href={n.href} onClick={n.onClick} type={n.href ? undefined : 'button'}
              className={['ht-inkhead__link', n.active ? 'is-active' : ''].filter(Boolean).join(' ')}
              aria-current={n.active ? 'page' : undefined}>{n.label}</Tag>
          );
        })}
        {action && <button className="ht-inkhead__ghost" type="button" onClick={onAction}>{action}</button>}
        {children}
      </nav>
    </header>
  );
}
