import {
  type FieldValues,
  useController,
  type UseControllerProps,
} from "react-hook-form";
import type { TextFieldProps } from "@/components/textField/TextField.tsx";
import { TextField } from "@/components";

type T_TextFieldControlled<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  "rules" | "disabled"
> &
  Omit<TextFieldProps, "checked" | "onChange">;

const TextFieldControlled = <T extends FieldValues>({
  control,
  shouldUnregister,
  ...rest
}: T_TextFieldControlled<T>) => {
  const { field } = useController({
    control,
    shouldUnregister,
    name: rest.name,
    disabled: rest.disabled,
  });
  return <TextField {...rest} {...field} />;
};

export default TextFieldControlled;
