import React from "react";

/** Square checkbox with an orange checked state. */
export function Checkbox({ label, checked, defaultChecked, onChange, id, style, ...rest }) {
  const boxId = id || React.useId();
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;

  return (
    <label htmlFor={boxId} style={{ display: "inline-flex", alignItems: "center", gap: "10px", cursor: "pointer", font: "400 15px/1.3 var(--font-family-base)", color: "var(--color-text)", ...style }}>
      <input
        id={boxId}
        type="checkbox"
        checked={on}
        onChange={(e) => { if (!isControlled) setInternal(e.target.checked); onChange && onChange(e); }}
        style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
        {...rest}
      />
      <span
        aria-hidden="true"
        style={{
          width: 20, height: 20, flex: "0 0 auto",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          background: on ? "var(--ocd-orange)" : "var(--color-surface)",
          border: `2px solid ${on ? "var(--ocd-orange)" : "var(--color-border-strong)"}`,
          borderRadius: "var(--radius-none)",
          transition: "var(--transition-control)",
        }}
      >
        {on && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6.2L4.8 9L10 3" stroke="#fff" strokeWidth="2" strokeLinecap="square" />
          </svg>
        )}
      </span>
      {label}
    </label>
  );
}
