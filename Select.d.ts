import React from "react";
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}
/**
 * Brand-styled native select. Pass <option> children.
 * @dsCard components/forms
 */
export declare function Select(props: SelectProps): JSX.Element;
