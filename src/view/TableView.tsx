import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { TableDataModel } from "../model/tableDataModel";
import { FC } from "react";

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
                    {rows.map((row) => (
                        <TableRow
                            key={row.courseId}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {Object.keys(row).map(key => <TableCell>{row[key as keyof TableDataModel]}</TableCell>)}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
