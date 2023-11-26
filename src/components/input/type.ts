import { InputHTMLAttributes } from "react";

interface LabelProps {
  name: string;
  label: string;
  children: JSX.Element;
}

interface Props<E> extends InputHTMLAttributes<E> {}

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  option: { value: string; label: string }[];
}

export type { Props, LabelProps, SelectProps };
