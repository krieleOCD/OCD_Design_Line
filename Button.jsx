import React from "react";

/**
 * Primary action control. Square corners, bold label, orange fill by brand
 * default. Hover/active darken; no scale.
 */
export function Button({
  variant = "primary",     // "primary" | "secondary" | "ghost" | "inverse"
  size = "md",             // "sm" | "md" | "lg"
  full = false,
  disabled = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const pad = { sm: "8px 16px", md: "12px 22px", lg: "16px 30px" }[size];
  const fs = { sm: 14, md: 16, lg: 18 }[size];

  const palettes = {
    primary: {
      bg: "var(--ocd-orange)", fg: "var(--ocd-white)", bd: "transparent",
      bgHover: "var(--ocd-orange-hover)", bgActive: "var(--ocd-orange-active)",
    },
    secondary: {
      bg: "transparent", fg: "var(--ocd-black)", bd: "var(--ocd-black)",
      bgHover: "var(--ocd-black)", fgHover: "var(--ocd-white)", bgActive: "var(--grey-800)",
    },
    ghost: {
      bg: "transparent", fg: "var(--ocd-black)", bd: "transparent",
      bgHover: "var(--grey-100)", bgActive: "var(--grey-200)",
    },
    inverse: {
      bg: "var(--ocd-white)", fg: "var(--ocd-black)", bd: "transparent",
      bgHover: "var(--grey-200)", bgActive: "var(--grey-300)",
    },
  };
  const p = palettes[variant] || palettes.primary;
  const bg = disabled ? p.bg : active ? p.bgActive || p.bgHover : hover ? p.bgHover : p.bg;
  const fg = !disabled && hover && p.fgHover ? p.fgHover : p.fg;

  return (
    <button
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        font: `700 ${fs}px/1.1 var(--font-family-base)`,
        letterSpacing: "-0.01em",
        color: fg,
        background: bg,
        border: `2px solid ${p.bd}`,
        borderRadius: "var(--radius-none)",
        padding: pad,
        width: full ? "100%" : "auto",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.4 : 1,
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        transition: "var(--transition-control)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
