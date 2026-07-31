import React from "react";

export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Full wordmark lockup, or the compact square mark. */
  variant?: "master" | "small";
  /** Text/mark colour. Use "light" on dark backgrounds. */
  tone?: "dark" | "light" | "mono-dark" | "mono-light";
  /** Path (relative to the consuming page) to the logos folder. */
  basePath?: string;
  /** Rendered height in px or CSS length. */
  height?: number | string;
}

/**
 * The official Orange Cyberdefense logo, rendered from the real PNG assets.
 * @dsCard components/brand
 * @startingPoint section="Brand" subtitle="Official logo lockups (never redrawn)" viewport="700x220"
 */
export declare function Logo(props: LogoProps): JSX.Element;
