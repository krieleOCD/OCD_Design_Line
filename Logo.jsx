import React from "react";

const FILES = {
  // master (wordmark lockup) — text colour by tone, on light vs dark bg
  "master:dark": "ocd-master-black.png",   // black text — for light backgrounds
  "master:light": "ocd-master-white.png",  // white text — for dark backgrounds
  "master:mono-dark": "ocd-master-black-mono.png",
  "master:mono-light": "ocd-master-white-mono.png",
  // small (square + underscore mark)
  "small:dark": "ocd-small-black.png",
  "small:light": "ocd-small-white.png",
};

/**
 * Renders the real Orange Cyberdefense logo (PNG asset — never redrawn).
 * `variant`: master lockup or small square mark. `tone`: "dark" text (light
 * backgrounds) or "light" text (dark backgrounds).
 */
export function Logo({
  variant = "master",       // "master" | "small"
  tone = "dark",            // "dark" | "light" | "mono-dark" | "mono-light"
  basePath = "assets/logos",
  height = 40,
  alt = "Orange Cyberdefense",
  style,
  ...rest
}) {
  const file = FILES[`${variant}:${tone}`] || FILES["master:dark"];
  return (
    <img
      src={`${basePath}/${file}`}
      alt={alt}
      style={{ height: typeof height === "number" ? `${height}px` : height, width: "auto", display: "block", ...style }}
      {...rest}
    />
  );
}
