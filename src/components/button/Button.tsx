import type { ComponentProps, ElementType, ReactNode } from "react";
import clsx from "clsx";
import s from "./Button.module.scss";

type T_Button<T extends ElementType = "button"> = {
  as?: T;
  children: ReactNode;
  variant?: "search" | "primary" | "secondary";
} & ComponentProps<T>;

const Button = (props: T_Button) => {
  const {
    as: Component = "button",
    children,
    variant = "primary",
    className,
    ...restProps
  } = props;
  const buttonStyle = clsx(className, s[variant]);
  return (
    <Component className={buttonStyle} {...restProps}>
      {children}
    </Component>
  );
};

export default Button;
