import { useDispatch } from "react-redux";
import store from "@/features/store.ts";

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
