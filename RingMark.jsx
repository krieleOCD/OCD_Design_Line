import React from "react";

/**
 * The concentric "bullseye" / target ornament — an orange ring wrapping a solid
 * black disc. Recurring brand device, usually anchored to an edge or seam.
 */
export function RingMark({
  size = 160,
  ring = "var(--ocd-orange)",
  core = "var(--ocd-black)",
  thickness,               // ring width in px; defaults to ~28% of size
  style,
  ...rest
}) {
  const d = typeof size === "number" ? size : parseInt(size, 10) || 160;
  const t = thickness ?? Math.round(d * 0.28);
  return (
    <div
      style={{
        width: d,
        height: d,
        borderRadius: "50%",
        background: ring,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "0 0 auto",
        ...style,
      }}
      {...rest}
    >
      <div style={{ width: d - t * 2, height: d - t * 2, borderRadius: "50%", background: core }} />
    </div>
  );
}
