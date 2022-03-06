import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { TableDataModel } from "../model/tableDataModel";
import { FC } from "react";
import TableViewRow from "./TableViewRow";

interface TableViewProps {
    headers: string[]
    rows: TableDataModel[]
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
                    {rows.map((row) => <TableViewRow row={row}/>)}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
