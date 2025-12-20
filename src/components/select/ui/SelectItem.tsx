import * as Select from "@radix-ui/react-select";
import clsx from "clsx";
import s from "./SelectUI.module.scss";
import { CheckIcon } from "@radix-ui/react-icons";
import type { ReactNode } from "react";

type SelectItemProps = {
  children: ReactNode;
  className?: string;
  value: string;
};

const SelectItem = ({ children, className, ...props }: SelectItemProps) => {
  return (
    <Select.Item className={clsx(s.item, className)} {...props}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className={s.itemIndicator}>
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
};

export default SelectItem;
