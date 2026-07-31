import React from "react";

/** Text input. Square corners, crisp border, orange border + black ring on focus. */
export function Input({ label, hint, error, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? "var(--color-danger)" : focus ? "var(--ocd-orange)" : "var(--color-border-strong)";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", ...style }}>
      {label && (
        <label htmlFor={inputId} style={{ font: "700 13px/1.2 var(--font-family-base)", color: "var(--color-text)" }}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          font: "400 16px/1.4 var(--font-family-base)",
          color: "var(--color-text)",
          background: "var(--color-surface)",
          border: `1px solid ${borderColor}`,
          borderRadius: "var(--radius-none)",
          padding: "11px 14px",
          outline: "none",
          boxShadow: focus && !error ? "0 0 0 2px rgba(255,121,0,0.25)" : "none",
          transition: "var(--transition-control)",
        }}
        {...rest}
      />
      {(hint || error) && (
        <span style={{ font: "400 12px/1.4 var(--font-family-base)", color: error ? "var(--color-danger)" : "var(--color-text-secondary)" }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
