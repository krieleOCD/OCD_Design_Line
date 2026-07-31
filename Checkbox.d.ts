import React from "react";
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}
/**
 * Square checkbox with orange checked fill.
 * @dsCard components/forms
 */
export declare function Checkbox(props: CheckboxProps): JSX.Element;
