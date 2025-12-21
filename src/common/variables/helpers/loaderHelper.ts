import type { BaseQueryApi } from "@reduxjs/toolkit/query";
import { setLoadingStatus } from "@/features/api";

export const loaderHelpers = (api: BaseQueryApi, status: boolean) => {
  api.dispatch(setLoadingStatus(status));
};
