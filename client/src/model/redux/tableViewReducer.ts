import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface Row {
    id: string;
    open: boolean;
}

export interface TableViewState {
    rows: Row[];
}

const initialState: TableViewState = {
    rows: [],
};

export const tableViewReducer = createSlice({
    name: 'tableView',
    initialState,
    reducers: {
        updateRows: (state, action: PayloadAction<Row>) => {
            const rowId = state.rows.findIndex((row) => row.id === action.payload.id);
            if (rowId === -1) {
                state.rows.push(action.payload);
            } else {
                state.rows[rowId] = action.payload;
            }
        },
    },
});

export const { updateRows } = tableViewReducer.actions

export const selectRows = (state: RootState) => state.tableView.rows;
