import React from "react";

/** The recurring eyebrow/overline device — uppercase, tracked, orange. */
export function Overline({ children, color = "var(--ocd-orange)", style, ...rest }) {
  return (
    <div
      style={{
        font: "700 12px/1.3 var(--font-family-base)",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
