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
                <TableCell data-testid="parent-table-cell">{row[key as keyof Course]}</TableCell> : <></>)}
        </>
    );
};

export default TableViewCells;
