import React from "react";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  /** Error message — turns the field red and shows below. */
  error?: string;
}
/**
 * Single-line text field with label, hint and error states.
 * @dsCard components/forms
 * @startingPoint section="Forms" subtitle="Text input, select & checkbox" viewport="700x300"
 */
export declare function Input(props: InputProps): JSX.Element;
