import * as Accordion from "@radix-ui/react-accordion";
import s from "./AccordionUI.module.scss";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import type { ReactNode, RefObject } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  ref?: RefObject<HTMLButtonElement>;
};

const AccordionTrigger = ({ children, className, ref, ...props }: Props) => (
  <Accordion.Header className={s.header}>
    <Accordion.Trigger
      className={clsx(s.trigger, className)}
      {...props}
      ref={ref}
    >
      {children}
      <ChevronDownIcon className={s.chevron} aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
);
export default AccordionTrigger;
