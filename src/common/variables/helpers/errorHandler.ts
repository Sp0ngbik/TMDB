import type {
  BaseQueryApi,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryReturnValue,
} from "@reduxjs/toolkit/query";
import { setErrorMessage } from "@/features/api/app/app.service.ts";

const isErrorWithMessage = (
  error: unknown,
): error is { status_message: string } => {
  return (
    typeof error === "object" &&
    error !== null &&
    "status_message" in error &&
    typeof error.status_message === "string"
  );
};

export const errorHandler = (
  api: BaseQueryApi,
  result: QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>,
) => {
  let errorMessage = "Some error occurred";
  if (result.error) {
    switch (result.error.status) {
      case "FETCH_ERROR":
      case "PARSING_ERROR":
      case "CUSTOM_ERROR":
      case "TIMEOUT_ERROR":
        errorMessage = result.error.error;
        break;
      default:
        if (isErrorWithMessage(result.error.data)) {
          errorMessage = result.error.data.status_message;
        } else if (result.error.status >= 500 && result.error.status < 600) {
          errorMessage = "Server error occurred. Please try again later.";
        } else {
          errorMessage = JSON.stringify(result.error);
        }
    }

    api.dispatch(setErrorMessage(errorMessage));
  }
};
