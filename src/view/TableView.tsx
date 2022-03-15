import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Course } from "../model/tableDataModel";
import { FC } from "react";
import CollapsibleTableViewCell from "./CollapsibleTableViewCell";
import TableViewRow from "./TableViewRow";
import { CollapsibleTableViewRow } from "./CollapsableTableViewRow";

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
                                <TableViewRow row={row} CollapsableTableViewCell={CollapsibleTableViewCell}/>
                                <CollapsibleTableViewRow row={row} open={true}/>
                            </>
                        )
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
