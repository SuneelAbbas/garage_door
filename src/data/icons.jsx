
/* ───────────────────────────────────────────────
 *  Flat Design Icon Library — Outlined Style
 *  White fill + theme-colored stroke (currentColor)
 *  Designed for Access Edge website
 * ─────────────────────────────────────────────── */

const iconBase = { display: "inline-block", verticalAlign: "middle" };

/* ── Size presets ── */
export const SIZES = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
};

/* ── Helpers ── */
const FlatSvg = ({ viewBox, children, size = 24, ...rest }) => (
  <svg
    viewBox={viewBox || "0 0 24 24"}
    width={size}
    height={size}
    fill="#fff"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={iconBase}
    {...rest}
  >
    {children}
  </svg>
);

/* ════════════════════════════════════════════════
 *  ICONS
 * ════════════════════════════════════════════════ */

/* ── Building / House / Garage Door ── */
export const IconGarage = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <rect x="2" y="10" width="20" height="12" rx="1" />
    <rect x="2" y="4" width="20" height="8" rx="1" />
    <rect x="6" y="14" width="5" height="8" rx="1" />
    <rect x="13" y="14" width="5" height="8" rx="1" />
  </FlatSvg>
);

/* ── Wrench / Tools ── */
export const IconWrench = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <path d="M16.5 2.5a7.5 7.5 0 00-6.8 4.2L3.3 13.1a3 3 0 000 4.2l3.4 3.4a3 3 0 004.2 0l6.4-6.4A7.5 7.5 0 0016.5 2.5zm.5 7a2 2 0 110-4 2 2 0 010 4z" />
  </FlatSvg>
);

/* ── Layers / Stack ── */
export const IconLayers = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <path d="M12 2L2 7l10 5 10-5L12 2z" fill="none" />
    <path d="M2 12l10 5 10-5" fill="none" />
    <path d="M2 17l10 5 10-5" fill="none" />
  </FlatSvg>
);

/* ── Monitor / Screen ── */
export const IconMonitor = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8" fill="none" />
    <rect x="10" y="17" width="4" height="4" rx="1" fill="none" />
  </FlatSvg>
);

/* ── Bell / Alert / Emergency ── */
export const IconBell = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9z" />
    <path d="M13.73 21a2 2 0 01-3.46 0" fill="none" />
  </FlatSvg>
);

/* ── Clock / Time ── */
export const IconClock = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="10" />
    <rect x="11" y="6" width="2" height="7" rx="1" fill="currentColor" stroke="none" />
    <rect x="11" y="11" width="5" height="2" rx="1" fill="currentColor" stroke="none" />
  </FlatSvg>
);

/* ── Shield / Security ── */
export const IconShield = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="2" />
  </FlatSvg>
);

/* ── Dollar / Price ── */
export const IconDollar = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v12" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M9 9.5c0-1.4 1.3-2.5 3-2.5s3 1.1 3 2.5-1.3 2.5-3 2.5-3 1.1-3 2.5 1.3 2.5 3 2.5 3-1.1 3-2.5" fill="none" stroke="currentColor" strokeWidth="2" />
  </FlatSvg>
);

/* ── Phone ── */
export const IconPhone = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </FlatSvg>
);

/* ── Check / Tick ── */
export const IconCheck = (props) => (
  <FlatSvg viewBox="0 0 20 20" {...props}>
    <circle cx="10" cy="10" r="10" />
    <path d="M6 10l3 3 5-5" fill="none" stroke="currentColor" strokeWidth="2.5" />
  </FlatSvg>
);

/* ── Check Circle (filled) ── */
export const IconCheckCircle = (props) => (
  <FlatSvg viewBox="0 0 20 20" {...props}>
    <circle cx="10" cy="10" r="10" />
    <path d="M6 10l3 3 5-5" fill="none" stroke="currentColor" strokeWidth="2.5" />
  </FlatSvg>
);

/* ── Arrow Right ── */
export const IconArrowRight = (props) => (
  <FlatSvg viewBox="0 0 20 20" {...props}>
    <path d="M4 10h12" fill="none" stroke="currentColor" strokeWidth="2.5" />
    <path d="M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2.5" />
  </FlatSvg>
);

/* ── Star ── */
export const IconStar = (props) => (
  <FlatSvg viewBox="0 0 20 20" {...props}>
    <path d="M10 1l2.39 4.84 5.34.78-3.86 3.77.91 5.33L10 13.71l-4.78 2.51.91-5.33-3.86-3.77 5.34-.78L10 1z" />
  </FlatSvg>
);

/* ── Location / Map Pin ── */
export const IconLocation = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" fill="currentColor" stroke="none" />
  </FlatSvg>
);

/* ── Menu / Hamburger ── */
export const IconMenu = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <rect x="4" y="5" width="16" height="3" rx="1.5" fill="currentColor" stroke="none" />
    <rect x="4" y="10.5" width="16" height="3" rx="1.5" fill="currentColor" stroke="none" />
    <rect x="4" y="16" width="16" height="3" rx="1.5" fill="currentColor" stroke="none" />
  </FlatSvg>
);

/* ── Close / X ── */
export const IconClose = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <rect x="5" y="5" width="2" height="14" rx="1" fill="currentColor" stroke="none" transform="rotate(45 6 12)" />
    <rect x="5" y="5" width="2" height="14" rx="1" fill="currentColor" stroke="none" transform="rotate(-45 6 12)" />
  </FlatSvg>
);

/* ── Chevron Down ── */
export const IconChevronDown = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <polygon points="12 17 4 9 20 9" fill="currentColor" stroke="none" />
  </FlatSvg>
);

/* ── Door (garage door icon for nav) ── */
export const IconDoor = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <rect x="3" y="2" width="18" height="20" rx="2" />
    <rect x="9" y="2" width="1" height="20" fill="currentColor" stroke="none" />
    <circle cx="12" cy="13" r="1.5" fill="currentColor" stroke="none" />
  </FlatSvg>
);

/* ── Spring / Coil ── */
export const IconSpring = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <path d="M3 12h4c0-3 2-5 5-5s5 2 5 5-2 5-5 5-5-2-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M17 12h4c0-3-2-5-5-5s-5 2-5 5 2 5 5 5 5-2 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
  </FlatSvg>
);

/* ── Remote / Opener ── */
export const IconRemote = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <rect x="7" y="2" width="10" height="20" rx="2" />
    <circle cx="12" cy="8" r="2" fill="currentColor" stroke="none" />
    <rect x="9" y="14" width="6" height="2" rx="1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" />
  </FlatSvg>
);

/* ── Warning / Alert Triangle ── */
export const IconWarning = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    <rect x="11" y="8" width="2" height="5" rx="1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none" />
  </FlatSvg>
);

/* ── Chat / Message ── */
export const IconChat = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </FlatSvg>
);

/* ── Award / Trophy ── */
export const IconAward = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </FlatSvg>
);

/* ── Truck / Vehicle ── */
export const IconTruck = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <rect x="1" y="6" width="15" height="10" rx="1" />
    <rect x="14" y="8" width="6" height="8" rx="1" />
    <circle cx="5" cy="18" r="3" fill="currentColor" stroke="none" />
    <circle cx="17" cy="18" r="3" fill="currentColor" stroke="none" />
  </FlatSvg>
);

/* ── Lightning / Fast ── */
export const IconLightning = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <polygon points="13 2 4 14 11 14 10 22 20 10 13 10" />
  </FlatSvg>
);

/* ── Check list / Clipboard ── */
export const IconClipboard = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <rect x="8" y="6" width="8" height="2" rx="1" fill="currentColor" stroke="none" opacity="0.5" />
    <rect x="8" y="10" width="8" height="2" rx="1" fill="currentColor" stroke="none" opacity="0.5" />
    <rect x="8" y="14" width="6" height="2" rx="1" fill="currentColor" stroke="none" opacity="0.5" />
  </FlatSvg>
);

/* ── Thumbs Up ── */
export const IconThumbsUp = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.72l1.38-8a2 2 0 00-2-2.28H14z" />
    <path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
  </FlatSvg>
);

/* ── Calendar ── */
export const IconCalendar = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <rect x="3" y="8" width="18" height="3" fill="currentColor" stroke="none" />
    <rect x="7" y="1" width="3" height="4" rx="1" />
    <rect x="14" y="1" width="3" height="4" rx="1" />
  </FlatSvg>
);

/* ── Spanner / Gears ── */
export const IconService = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v4" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M12 19v4" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M4.22 4.22l2.83 2.83" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M16.95 16.95l2.83 2.83" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M1 12h4" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M19 12h4" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M4.22 19.78l2.83-2.83" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M16.95 7.05l2.83-2.83" fill="none" stroke="currentColor" strokeWidth="2" />
  </FlatSvg>
);

/* ── Tag / Price Tag ── */
export const IconTag = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
    <circle cx="7" cy="7" r="2" fill="currentColor" stroke="none" />
  </FlatSvg>
);

/* ── Battery ── */
export const IconBattery = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <rect x="1" y="6" width="18" height="12" rx="2" />
    <rect x="6" y="9" width="3" height="6" rx="1" fill="currentColor" stroke="none" />
    <rect x="11" y="9" width="3" height="6" rx="1" fill="currentColor" stroke="none" />
    <rect x="16" y="9" width="3" height="6" rx="1" fill="currentColor" stroke="none" />
    <path d="M23 10v4" fill="none" stroke="currentColor" strokeWidth="2" />
  </FlatSvg>
);

/* ── Quiet / Mute ── */
export const IconQuiet = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <path d="M11 5L6 9H2v6h4l5 4V5z" />
    <line x1="23" y1="9" x2="17" y2="15" fill="none" stroke="currentColor" strokeWidth="2" />
    <line x1="17" y1="9" x2="23" y2="15" fill="none" stroke="currentColor" strokeWidth="2" />
  </FlatSvg>
);

/* ── Refresh / Sync ── */
export const IconRefresh = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <path d="M23 4v6h-6" fill="none" />
    <path d="M1 20v-6h6" fill="none" />
    <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" fill="none" stroke="currentColor" strokeWidth="2" />
  </FlatSvg>
);

/* ── Lock / Security ── */
export const IconLock = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
    <circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none" />
  </FlatSvg>
);

/* ── Handshake / Partnership ── */
export const IconHandshake = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <path d="M20 17.5l-8 4-8-4V7l8-4 8 4v10.5z" />
    <path d="M12 13l8-4M12 13l-8-4M12 13v8" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </FlatSvg>
);

/* ── Alarm / Clock with bell ── */
export const IconAlarm = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="13" r="9" />
    <path d="M12 9v4l2.5 2.5" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M5 3L2 6M19 3l3 3" fill="none" stroke="currentColor" strokeWidth="2" />
  </FlatSvg>
);

/* ── Hammer / Tools ── */
export const IconHammer = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <path d="M15 12l-8.5 8.5a2.12 2.12 0 01-3-3L12 9" />
    <path d="M18 9l-3-3 2.17-2.17a3 3 0 014.24 0l.76.76a3 3 0 010 4.24L18 9z" />
  </FlatSvg>
);

/* ── Neighborhood / Houses ── */
export const IconNeighborhood = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <path d="M3 10l9-7 9 7" fill="none" />
    <rect x="4" y="10" width="16" height="12" rx="1" />
    <rect x="8" y="14" width="3" height="8" fill="currentColor" stroke="none" />
    <rect x="13" y="14" width="3" height="8" fill="currentColor" stroke="none" />
    <rect x="8" y="2" width="3" height="4" fill="currentColor" stroke="none" />
    <rect x="16" y="2" width="3" height="4" fill="currentColor" stroke="none" />
  </FlatSvg>
);

/* ── Search / Magnifying Glass ── */
export const IconSearch = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" fill="none" stroke="currentColor" strokeWidth="2.5" />
  </FlatSvg>
);

/* ── Map Pin / Location Marker ── */
export const IconMapPin = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" fill="currentColor" stroke="none" />
  </FlatSvg>
);

/* ── Mail / Email ── */
export const IconMail = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 6l-10 7L2 6" fill="none" stroke="currentColor" strokeWidth="2" />
  </FlatSvg>
);

/* ── Home / House ── */
export const IconHome = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <path d="M3 10l9-7 9 7" fill="none" />
    <rect x="4" y="10" width="16" height="12" rx="1" />
    <rect x="9" y="14" width="6" height="8" fill="currentColor" stroke="none" />
  </FlatSvg>
);

/* ── Trophy / Award ── */
export const IconTrophy = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <path d="M6 3h12v4a6 6 0 01-12 0V3z" />
    <path d="M6 3H4a2 2 0 00-2 2v1a3 3 0 003 3h1M18 3h2a2 2 0 012 2v1a3 3 0 01-3 3h-1" />
    <path d="M12 15v6M9 21h6" fill="none" />
  </FlatSvg>
);

/* ── Diamond / Premium / Gem ── */
export const IconDiamond = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <path d="M2 8l4-5h12l4 5-10 14L2 8z" />
    <path d="M2 8h20" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </FlatSvg>
);

/* ── Shield with Check ── */
export const IconShieldCheck = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="2" />
  </FlatSvg>
);

/* ── Clock Alt / Timer ── */
export const IconClockAlt = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" fill="none" stroke="currentColor" strokeWidth="2" />
  </FlatSvg>
);

/* ── Percent / 100% ── */
export const IconPercent = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <circle cx="7" cy="7" r="3" />
    <circle cx="17" cy="17" r="3" />
    <path d="M19 5L5 19" fill="none" stroke="currentColor" strokeWidth="2.5" />
  </FlatSvg>
);

/* ── Palette / Design ── */
export const IconPalette = (props) => (
  <FlatSvg viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="8" cy="8" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="16" cy="8" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="6" cy="14" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="18" cy="14" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="12" cy="18" r="1.5" fill="currentColor" stroke="none" />
  </FlatSvg>
);
