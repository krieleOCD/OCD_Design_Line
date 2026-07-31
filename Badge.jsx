import React from "react";

const TONES = {
  neutral: { bg: "var(--grey-200)", fg: "var(--ocd-black)" },
  orange: { bg: "var(--ocd-orange)", fg: "var(--ocd-white)" },
  success: { bg: "var(--color-success-bg)", fg: "var(--color-success-deep)" },
  info: { bg: "var(--color-info-bg)", fg: "var(--color-info-deep)" },
  warning: { bg: "var(--color-warning-bg)", fg: "var(--ocd-black)" },
  danger: { bg: "var(--color-danger-bg)", fg: "var(--color-danger-deep)" },
};

/** Square status badge — for counts, states and labels. */
export function Badge({ children, tone = "neutral", style, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        font: "700 11px/1 var(--font-family-base)",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: t.fg,
        background: t.bg,
        borderRadius: "var(--radius-xs)",
        padding: "5px 8px",
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
