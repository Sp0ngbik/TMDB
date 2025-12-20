import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type AppSliceState = {
  errorMessage?: string;
  loadingStatus: boolean;
};

const initialState: AppSliceState = {
  errorMessage: "",
  loadingStatus: false,
};

export const appSlice = createSlice({
  initialState,
  name: "appSlice",
  selectors: {
    getErrorMessage: (state) => state.errorMessage,
    getLoadingStatus: (state) => state.loadingStatus,
  },
  reducers: {
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
    setLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.loadingStatus = action.payload;
    },
  },
});

export const { setErrorMessage, setLoadingStatus } = appSlice.actions;
export const { getErrorMessage, getLoadingStatus } = appSlice.selectors;
