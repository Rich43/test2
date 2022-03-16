import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Course } from "../model/tableDataModel";
import { FC } from "react";
import { TableViewCells } from "./TableViewCells";
import { CollapsibleTableViewRow } from "./CollapsableTableViewRow";
import CollapsibleTableViewCell from "./CollapsibleTableViewCell";
import { useAppSelector } from "../model/redux/hooks";
import { selectRows } from "../model/redux/tableViewReducer";

interface TableViewProps {
    headers: string[]
    rows: Course[]
}

export const TableView: FC<TableViewProps> = ({ headers, rows }) => {
    const tableViewSelector = useAppSelector(selectRows);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ width: 50 }}>{/*Unneeded header for expand/collapse*/}</TableCell>
                        {headers.map(row => (<TableCell>{row}</TableCell>))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => {
                            const matchingRow = tableViewSelector.find(reduxRow => reduxRow.id === row.id);
                            const open = matchingRow ? matchingRow.open : false;
                            return (
                                <>
                                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                        <CollapsibleTableViewCell row={row}/>
                                        <TableViewCells row={row}/>
                                    </TableRow>
                                    {open ? <CollapsibleTableViewRow row={row} open={true}/> : <></>}
                                </>
                            );
                        }
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
