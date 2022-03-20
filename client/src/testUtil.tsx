import { configureStore } from "@reduxjs/toolkit";
import { tableViewReducer } from "./model/redux/tableViewReducer";
import { Provider } from "react-redux";
import { render as rtlRender } from "@testing-library/react";
import React from "react";

export function render (
    ui: JSX.Element,
    {
        preloadedState,
        store = configureStore({ reducer: { [tableViewReducer.name]: tableViewReducer.reducer }, preloadedState }),
        ...renderOptions
    }: { preloadedState?: any, store?: any } = {}
) {
    function Wrapper ({ children }: { children: JSX.Element }) {
        return <Provider store={store}>{children}</Provider>
    }

    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}
