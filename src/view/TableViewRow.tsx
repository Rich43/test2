import React, { FunctionComponent } from 'react';
import { Course } from "../model/tableDataModel";
import { TableCell, TableRow } from "@mui/material";

interface Props {
    row: Course
}

export const TableViewRow: FunctionComponent<Props> = ({ row }) => {
    return <TableRow
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
        {Object.keys(row).map(key => typeof row[key as keyof Course] === 'string' ?
            <TableCell>{row[key as keyof Course]}</TableCell> : <></>)}
    </TableRow>;
};

export default TableViewRow;
