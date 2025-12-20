import { type ComponentProps, type ElementType } from "react";
import clsx from "clsx";
import s from "./TextField.module.scss";

export type TextFieldProps<T extends ElementType = "input"> = {
  variant?: "search" | "primary";
  errorMessage?: string;
  onValueChange?: (value: string) => void;
} & ComponentProps<T>;

const TextField = (props: TextFieldProps) => {
  const {
    errorMessage,
    className,
    onChange,
    onValueChange,
    variant = "search",
    ref,
    ...rest
  } = props;
  const inputClassName = clsx(s[variant], className);
  return (
    <div className={s.textFieldWrapper}>
      <input
        {...rest}
        className={inputClassName}
        ref={ref}
        onChange={(e) => {
          if (onChange) {
            onChange(e);
          }
          if (onValueChange) {
            onValueChange(e.currentTarget.value);
          }
        }}
      />
      <span className={s.errorMessage}>
        {errorMessage && errorMessage}&nbsp;
      </span>
    </div>
  );
};

export default TextField;
