import React from "react";
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Add the brand's 4px orange top rule. */
  accent?: boolean;
  /** Dark surface for use on black backgrounds. */
  dark?: boolean;
  /** Apply card padding (default true). */
  padded?: boolean;
}
/**
 * Flat, square-cornered content card.
 * @dsCard components/core
 * @startingPoint section="Core" subtitle="Flat content card with optional orange rule" viewport="700x260"
 */
export declare function Card(props: CardProps): JSX.Element;
