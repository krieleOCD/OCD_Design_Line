import React from "react";

/** Native select, brand-styled with a square frame and orange focus. */
export function Select({ label, id, children, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const selId = id || React.useId();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", ...style }}>
      {label && (
        <label htmlFor={selId} style={{ font: "700 13px/1.2 var(--font-family-base)", color: "var(--color-text)" }}>
          {label}
        </label>
      )}
      <div style={{ position: "relative" }}>
        <select
          id={selId}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            width: "100%",
            appearance: "none",
            font: "400 16px/1.4 var(--font-family-base)",
            color: "var(--color-text)",
            background: "var(--color-surface)",
            border: `1px solid ${focus ? "var(--ocd-orange)" : "var(--color-border-strong)"}`,
            borderRadius: "var(--radius-none)",
            padding: "11px 40px 11px 14px",
            outline: "none",
            boxShadow: focus ? "0 0 0 2px rgba(255,121,0,0.25)" : "none",
            transition: "var(--transition-control)",
            cursor: "pointer",
          }}
          {...rest}
        >
          {children}
        </select>
        <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: "6px solid var(--ocd-black)" }} />
      </div>
    </div>
  );
}
