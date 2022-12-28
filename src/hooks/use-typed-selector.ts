import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from '../state';

// understand the type of data that is stored inside of our store
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;