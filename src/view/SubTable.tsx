import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Student } from "../model/tableDataModel";
import React, { FC } from "react";

interface TableViewProps {
    headers: string[]
    rows: Student[]
}

export const SubTable: FC<TableViewProps> = ({ headers, rows }) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    {headers.map(row => (<TableCell>{row}</TableCell>))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            {Object.keys(row).map(key => typeof row[key as keyof Student] === 'string' ?
                                <TableCell>{row[key as keyof Student]}</TableCell> : <></>)}
                        </TableRow>
                    )
                )}
            </TableBody>
        </Table>
    );
}