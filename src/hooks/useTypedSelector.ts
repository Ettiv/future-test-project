import {TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers/roootReducer";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;