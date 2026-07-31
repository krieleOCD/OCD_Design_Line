import React from "react";

/**
 * Content surface. Flat by default (crisp border, square corners). `accent`
 * adds the brand's top orange rule; `dark` inverts for use on black.
 */
export function Card({ children, accent = false, dark = false, padded = true, style, ...rest }) {
  return (
    <div
      style={{
        background: dark ? "var(--grey-850)" : "var(--color-surface)",
        color: dark ? "var(--color-text-inverse)" : "var(--color-text)",
        border: dark ? "1px solid var(--color-border-inverse)" : "1px solid var(--color-border)",
        borderTop: accent ? "4px solid var(--ocd-orange)" : undefined,
        borderRadius: "var(--radius-none)",
        padding: padded ? "var(--padding-card)" : 0,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
