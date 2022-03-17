import { configureStore } from '@reduxjs/toolkit';
import { tableViewReducer } from "./tableViewReducer";
import { enhancer } from "addon-redux";

export const createStore = () =>
    configureStore({
        reducer: {
            [tableViewReducer.name]: tableViewReducer.reducer
        },
        enhancers: [enhancer]
    });

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
