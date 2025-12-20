import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import s from "./Select.module.scss";
import SelectItem from "./ui/SelectItem.tsx";
import { useSearchParams } from "react-router-dom";

type SelectItems = { value: string; title: string; id: string }[];
type SelectProps = {
  selectTitle: string;
  selectItems: SelectItems;
};

const SelectComponent = ({ selectTitle, selectItems }: SelectProps) => {
  const [selectParam, setSelectParams] = useSearchParams();
  const select = selectParam.get("sort_by");

  const onValueChange = (value: string) => {
    setSelectParams((prev) => {
      prev.set("sort_by", value);
      return prev;
    });
  };
  return (
    <Select.Root onValueChange={onValueChange} value={select || ""}>
      <Select.Trigger className={s.trigger} aria-label="Food">
        <Select.Value placeholder={selectTitle} />
        <Select.Icon className={s.icon}>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className={s.content}
          side={"bottom"}
          position={"popper"}
          avoidCollisions={true}
        >
          <Select.ScrollUpButton className={s.scrollButton}>
            <ChevronUpIcon className={s.chevron} />
          </Select.ScrollUpButton>
          <Select.Viewport className={s.viewport}>
            <Select.Group>
              {selectItems.map((item) => (
                <SelectItem key={item.id} value={item.value}>
                  {item.title}
                </SelectItem>
              ))}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className={s.scrollButton}>
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default SelectComponent;
