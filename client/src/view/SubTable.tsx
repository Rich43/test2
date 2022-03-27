import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Student } from "../model/tableDataModel";
import React, { FC } from "react";

interface TableViewProps {
    headers: string[]
    rows: Student[]
}

export const SubTable: FC<TableViewProps> = ({ headers, rows }) => {
    return (
        <Table data-testid="sub-table">
            <TableHead data-testid="sub-table-head">
                {headers.length > 0 &&
                    <TableRow>
                        {headers.map((header, index) => <TableCell key={index}>{header}</TableCell>)}
                    </TableRow>
                }
            </TableHead>
            <TableBody data-testid="sub-table-body">
                {rows.map((row) => (
                        <TableRow key={row.id} data-testid="sub-table-row" sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            {Object.keys(row).map(key => typeof row[key as keyof Student] === 'string' ?
                                <TableCell data-testid="sub-table-cell" key={key}>{row[key as keyof Student]}</TableCell> : <></>)}
                        </TableRow>
                    )
                )}
            </TableBody>
        </Table>
    );
}
