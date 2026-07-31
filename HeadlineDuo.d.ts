import React from "react";

export interface HeadlineDuoProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** The tension/problem line(s). String or array of lines. */
  lead: string | string[];
  /** The Orange Cyberdefense answer line(s), rendered in orange. */
  accent: string | string[];
  /** Font size in px or CSS length. */
  size?: number | string;
  /** Colour of the lead lines (black on light, white on dark). */
  leadColor?: string;
  accentColor?: string;
  /** Heading tag to render. */
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Two-tone stacked brand headline — "Avoid Spyware. / Stay Aware."
 * @dsCard components/brand
 * @startingPoint section="Brand" subtitle="Two-tone stacked campaign headline" viewport="700x260"
 */
export declare function HeadlineDuo(props: HeadlineDuoProps): JSX.Element;
