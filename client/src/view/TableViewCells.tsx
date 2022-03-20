import React, { FunctionComponent } from 'react';
import { Course } from "../model/tableDataModel";
import { TableCell } from "@mui/material";

interface Props {
    row: Course
}

export const TableViewCells: FunctionComponent<Props> = ({ row }) => {
    return (
        <>
            {Object.keys(row).map(key => typeof row[key as keyof Course] === 'string' ?
                <TableCell>{row[key as keyof Course]}</TableCell> : <></>)}
        </>
    );
};

export default TableViewCells;
