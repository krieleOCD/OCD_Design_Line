import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual weight. `primary` = orange fill; `inverse` = white on dark bg. */
  variant?: "primary" | "secondary" | "ghost" | "inverse";
  size?: "sm" | "md" | "lg";
  /** Stretch to container width. */
  full?: boolean;
}

/**
 * The primary Orange Cyberdefense action button — square corners, bold label.
 * @dsCard components/core
 * @startingPoint section="Core" subtitle="Buttons — primary, secondary, ghost, inverse" viewport="700x160"
 */
export declare function Button(props: ButtonProps): JSX.Element;
