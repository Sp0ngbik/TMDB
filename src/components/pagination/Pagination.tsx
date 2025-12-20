import s from "./Pagination.module.scss";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { DOTS, usePagination } from "./hooks/usePagination";
import { Dots } from "@/assets";
import clsx from "clsx";
import { Button } from "@/components";
import { useSearchParams } from "react-router-dom";

type PaginationType = {
  totalPages: number | undefined;
  siblingsCount: number;
  className?: string;
};

const Pagination = ({
  siblingsCount,
  totalPages = 30,
  className,
}: PaginationType) => {
  const filterTotalPages = totalPages <= 500 ? totalPages : 500;
  const [params, setParams] = useSearchParams({ page: "1" });
  const currentPage = Number(params.get("page"));
  const paginationRange = usePagination({
    currentPage,
    filterTotalPages,
    siblingsCount,
  });
  const onPageChangeHandler = (currentPage: number) => {
    setParams((prev) => {
      prev.set("page", currentPage.toString());
      return prev;
    });
  };
  const currentPageParams = params.get("page");
  const onNext = () => {
    if (currentPageParams)
      setParams((prev) => {
        prev.set("page", (Number(currentPageParams) + 1).toString());
        return prev;
      });
  };
  const onPrevious = () => {
    if (currentPageParams)
      setParams((prev) => {
        prev.set("page", (Number(currentPageParams) - 1).toString());
        return prev;
      });
  };
  const pageButton = clsx(s.pageButton, className);
  const disableBackwardButton = currentPage === 1;
  const disableForwardButton = currentPage === filterTotalPages;
  return (
    <div className={s.paginationContainer}>
      <Button
        disabled={disableBackwardButton}
        onClick={onPrevious}
        className={pageButton}
      >
        <ArrowLeftIcon />
      </Button>
      {paginationRange?.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <Button className={pageButton} key={index}>
              <Dots className={s.dotsSvg} />
            </Button>
          );
        }
        return (
          <Button
            key={index}
            onClick={() => onPageChangeHandler(Number(pageNumber))}
            className={clsx(
              pageButton,
              currentPage === pageNumber && s.activeButton,
            )}
          >
            {pageNumber}
          </Button>
        );
      })}
      <Button
        disabled={disableForwardButton}
        onClick={onNext}
        className={pageButton}
      >
        <ArrowRightIcon />
      </Button>
    </div>
  );
};

export default Pagination;
