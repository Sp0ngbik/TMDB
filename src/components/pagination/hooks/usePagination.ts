import { useMemo } from "react";

type Props = {
  filterTotalPages: number;
  currentPage: number;
  siblingsCount: number;
};
export const DOTS = "dots";
export const usePagination = ({
  filterTotalPages,
  currentPage,
  siblingsCount,
}: Props) => {
  return useMemo(() => {
    const range = (start: number, end: number) => {
      const length = end - start + 1;

      return Array.from({ length }, (_, idx) => idx + start);
    };

    const leftSiblingsIndex = Math.max(currentPage - siblingsCount, 1);
    const rightSiblingsIndex = Math.min(
      currentPage + siblingsCount,
      filterTotalPages,
    );
    const shouldShowLeftDots = leftSiblingsIndex > 2;
    const shouldShowRightDots = rightSiblingsIndex < filterTotalPages - 2;
    const firstPage = 1;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemsCount = 3 + 2 + siblingsCount;
      const leftRange = range(1, leftItemsCount);
      return [...leftRange, DOTS, filterTotalPages];
    }
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemsCount = 3 + 2 * siblingsCount;
      const rightRange = range(
        filterTotalPages - rightItemsCount,
        filterTotalPages,
      );
      return [firstPage, DOTS, ...rightRange];
    }

    if (shouldShowRightDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingsIndex, rightSiblingsIndex);
      return [firstPage, DOTS, ...middleRange, DOTS, filterTotalPages];
    }
    if (!shouldShowLeftDots && !shouldShowRightDots) {
      if (firstPage === filterTotalPages) {
        return [firstPage];
      } else return [firstPage, filterTotalPages];
    }
  }, [filterTotalPages, currentPage, siblingsCount]);
};
