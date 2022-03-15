import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Course } from "../model/tableDataModel";
import { FC } from "react";
import CollapsibleTableViewRow from "./CollapsibleTableViewRow";

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
                        {headers.map(row => (<TableCell>{row}</TableCell>))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => <CollapsibleTableViewRow row={row}/>)}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
