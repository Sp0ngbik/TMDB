import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button, TextFieldControlled } from "@/components";
import { routes, searchSchema, type T_SearchSchema } from "@/common/variables";
import clsx from "clsx";
import s from "./SearchForm.module.scss";

type Props = {
  className?: string;
  fullWidth?: boolean;
  placeholder?: string;
  onValueChange?: (value: string) => void;
};

const SearchForm = (props: Props) => {
  const [params] = useSearchParams();
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<T_SearchSchema>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      searchValue: params.get("q") || "",
    },
  });
  const { fullWidth, className, placeholder, onValueChange } = props;
  const searchFormClass = clsx(fullWidth && s["fullWidth"], className);
  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const onSearch = () => {
    const q = getValues("searchValue");
    setSearchParams({ q });
    navigate(routes.search + "?q=" + q);
  };
  return (
    <form onSubmit={handleSubmit(onSearch)} className={searchFormClass}>
      <TextFieldControlled
        control={control}
        variant={"search"}
        type={"search"}
        name={"searchValue"}
        placeholder={placeholder}
        onValueChange={onValueChange}
        errorMessage={errors.searchValue?.message}
      />
      <Button
        type={"submit"}
        variant={"search"}
        disabled={!!errors.searchValue?.message}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
