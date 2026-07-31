import React from "react";

/**
 * The brand's core copy device: a stacked, two-tone headline. The first line(s)
 * state the tension (in `lead` colour), the emphasis line(s) give the Orange
 * Cyberdefense answer (in orange). Bold Helvetica Neue, tight leading.
 */
export function HeadlineDuo({
  lead,                    // string or array of lines (the "problem")
  accent,                  // string or array of lines (the orange "answer")
  size = 56,
  leadColor = "var(--ocd-black)",
  accentColor = "var(--ocd-orange)",
  as: Tag = "h2",
  style,
  ...rest
}) {
  const toLines = (v) => (Array.isArray(v) ? v : v == null ? [] : [v]);
  const fs = typeof size === "number" ? `${size}px` : size;
  return (
    <Tag
      style={{
        fontFamily: "var(--font-family-display)",
        fontWeight: 700,
        fontSize: fs,
        lineHeight: 1.02,
        letterSpacing: "-0.02em",
        margin: 0,
        ...style,
      }}
      {...rest}
    >
      {toLines(lead).map((l, i) => (
        <span key={`l${i}`} style={{ display: "block", color: leadColor }}>{l}</span>
      ))}
      {toLines(accent).map((l, i) => (
        <span key={`a${i}`} style={{ display: "block", color: accentColor }}>{l}</span>
      ))}
    </Tag>
  );
}
