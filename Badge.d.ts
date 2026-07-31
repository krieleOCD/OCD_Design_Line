import React from "react";
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Semantic colour. */
  tone?: "neutral" | "orange" | "success" | "info" | "warning" | "danger";
}
/**
 * Small uppercase status badge (square corners).
 * @dsCard components/core
 */
export declare function Badge(props: BadgeProps): JSX.Element;
