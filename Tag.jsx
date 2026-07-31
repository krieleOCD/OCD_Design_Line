import React from "react";

/** Small pill chip for tags / filters / categories. */
export function Tag({ children, color = "var(--ocd-black)", bg = "var(--grey-100)", style, ...rest }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        font: "700 12px/1 var(--font-family-base)",
        letterSpacing: "0.02em",
        color,
        background: bg,
        borderRadius: "var(--radius-pill)",
        padding: "6px 12px",
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
