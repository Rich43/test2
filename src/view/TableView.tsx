import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Course } from "../model/tableDataModel";
import { FC } from "react";
import { TableViewCells } from "./TableViewCells";
import { CollapsibleTableViewRow } from "./CollapsableTableViewRow";
import CollapsibleTableViewCell from "./CollapsibleTableViewCell";

interface TableViewProps {
    headers: string[]
    rows: Course[]
}

export const TableView: FC<TableViewProps> = ({ headers, rows }) => {
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
                            <CollapsibleTableViewCell row={row}/>
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
