import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Course } from "../model/tableDataModel";
import { FC, useReducer } from "react";
import { TableViewCells } from "./TableViewCells";
import { CollapsibleTableViewRow } from "./CollapsableTableViewRow";

interface TableViewProps {
    headers: string[]
    rows: Course[]
}

type OpenStateType = { id: string, open: boolean };
const initialCollapseState: OpenStateType[] = [];

const reducer = (state: OpenStateType[], action: { type: string, index: number, newValue: OpenStateType }) => {
    switch (action.type) {
        case "UPDATE":
            let newState = state.slice();
            let index = newState.findIndex(row => row.id === action.newValue.id);
            if (index === -1) {
                newState.push(action.newValue);
            } else {
                newState[index] = action.newValue;
            }
            return newState;
        default:
            return state;
    }
};

export const TableView: FC<TableViewProps> = ({ headers, rows }) => {
    const [collapseState, dispatch] = useReducer(reducer, initialCollapseState);
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>{/*Unneeded header for expand/collapse*/}</TableCell>
                        {headers.map(row => (<TableCell>{row}</TableCell>))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <>
                            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                <TableViewCells row={row}/>
                            </TableRow>
                            <CollapsibleTableViewRow row={row} open={true}/>
                        </>
                        )
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
