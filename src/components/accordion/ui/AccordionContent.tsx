import * as Accordion from "@radix-ui/react-accordion";
import clsx from "clsx";
import s from "./AccordionUI.module.scss";
import type { ReactNode, RefObject } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  ref?: RefObject<HTMLDivElement>;
};

const AccordionContent = ({ children, className, ref, ...props }: Props) => (
  <Accordion.Content
    className={clsx(s.content, className)}
    {...props}
    ref={ref}
  >
    <div className={s.contentText}>{children}</div>
  </Accordion.Content>
);
export default AccordionContent;
