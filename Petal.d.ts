import React from "react";

export interface PetalProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Ornament geometry. */
  shape?: "quarter" | "half" | "circle" | "three-quarter";
  /** For `quarter`: which corner the arc curves toward. */
  corner?: "tl" | "tr" | "bl" | "br";
  /** Fill colour (ignored when `src` is set). Use a brand token. */
  color?: string;
  /** Diameter in px, or any CSS length. */
  size?: number | string;
  /** Optional image — clipped into the ornament shape (brand photo mask). */
  src?: string;
  alt?: string;
}

/**
 * The signature quarter-circle / "petal" ornament — the core Orange Cyberdefense
 * visual device. Use as a solid colour block or as a circle-arc photo mask.
 * @dsCard components/brand
 * @startingPoint section="Brand" subtitle="Signature circle-arc ornament & photo mask" viewport="700x260"
 */
export declare function Petal(props: PetalProps): JSX.Element;
