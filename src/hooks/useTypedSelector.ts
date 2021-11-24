import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppState } from 'types';

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
