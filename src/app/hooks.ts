import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import {useContext} from "react";
import {PlatformContext} from "../components/PlatformContext/PlatformContext";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const usePlatform = () => {
    const context = useContext(PlatformContext);
    if (!context) {
        throw new Error('usePlatform must be used within a PlatformProvider');
    }
    return context;
};
