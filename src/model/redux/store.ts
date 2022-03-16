import { configureStore } from '@reduxjs/toolkit';
import { tableViewReducer } from "./tableViewReducer";

const store = configureStore({
    reducer: {
        [tableViewReducer.name]: tableViewReducer.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
