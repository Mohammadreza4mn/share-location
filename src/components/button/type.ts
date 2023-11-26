import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: "blue" | "gray";
  width: "full" | "medium";
  children: React.ReactNode;
}

type StyleProps<T> = keyof T;

export type { Props, StyleProps };
