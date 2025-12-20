import s from "./Accordion.module.scss";
import * as Accordion from "@radix-ui/react-accordion";
import AccordionTrigger from "./ui/AccordionTrigger.tsx";
import AccordionContent from "./ui/AccordionContent.tsx";
import type { ReactNode } from "react";

type AccordionProps = {
  item: { triggerTitle: string; content: ReactNode | string; id: string }[];
  children?: ReactNode;
};

const AccordionComponent = ({ item, children }: AccordionProps) => (
  <Accordion.Root
    className={s.root}
    type="multiple"
    defaultValue={item.map((el) => `item-${el.id}`)}
  >
    {item.map(({ triggerTitle, content, id }) => (
      <Accordion.Item value={`item-${id}`} key={id}>
        <AccordionTrigger>{triggerTitle}</AccordionTrigger>
        <AccordionContent>{content}</AccordionContent>
      </Accordion.Item>
    ))}
    {children}
  </Accordion.Root>
);

export default AccordionComponent;
