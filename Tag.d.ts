import React from "react";
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: string;
  bg?: string;
}
/**
 * Pill-shaped tag / category chip.
 * @dsCard components/core
 */
export declare function Tag(props: TagProps): JSX.Element;
