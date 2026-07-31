import React from "react";

/**
 * The signature Orange Cyberdefense ornament: a circle cut into 90° arcs.
 * Renders as a solid colour block, or as a mask for an image (`src`).
 */
export function Petal({
  shape = "quarter",      // "quarter" | "half" | "circle" | "three-quarter"
  corner = "tl",          // which corner the arc's centre sits at: tl|tr|bl|br (quarter only)
  color = "var(--ocd-orange)",
  size = 160,
  src,
  alt = "",
  style,
  ...rest
}) {
  const radius = {
    quarter: { tl: "0 0 100% 0", tr: "0 0 0 100%", bl: "0 100% 0 0", br: "100% 0 0 0" }[corner],
    half: "999px 999px 0 0",
    "three-quarter": "999px 0 999px 999px",
    circle: "50%",
  }[shape];

  const dims = typeof size === "number" ? `${size}px` : size;
  const base = {
    width: dims,
    height: shape === "half" ? (typeof size === "number" ? `${size / 2}px` : size) : dims,
    borderRadius: radius,
    overflow: "hidden",
    flex: "0 0 auto",
    ...style,
  };

  if (src) {
    return (
      <div style={base} {...rest}>
        <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
    );
  }
  return <div style={{ ...base, background: color }} {...rest} />;
}
