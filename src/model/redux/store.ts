import { configureStore } from '@reduxjs/toolkit';
import { tableViewReducer } from "./tableViewReducer";
import { enhancer } from "addon-redux";

export const store = configureStore({
    reducer: {
        [tableViewReducer.name]: tableViewReducer.reducer
    },
    enhancers: [enhancer]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
