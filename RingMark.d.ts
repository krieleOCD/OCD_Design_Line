import React from "react";

export interface RingMarkProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Diameter in px, or CSS length. */
  size?: number | string;
  /** Outer ring colour. */
  ring?: string;
  /** Inner disc colour. */
  core?: string;
  /** Ring width in px (defaults to ~28% of size). */
  thickness?: number;
}

/**
 * Concentric bullseye ornament — orange ring around a black disc.
 * @dsCard components/brand
 */
export declare function RingMark(props: RingMarkProps): JSX.Element;
