import { Collapse, TableCell, TableRow } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";
import { Course } from "../model/tableDataModel";

export interface CollapsableTableViewRowProps {
    row: Course,
    open: boolean
}

export const CollapsibleTableViewRow: FC<PropsWithChildren<CollapsableTableViewRowProps>> = ({ row, open }) => {
    return (
        <Collapse in={open} timeout="auto" unmountOnExit>
            <TableRow>
                <TableCell colSpan={5}>
                    Collapse content here
                </TableCell>
            </TableRow>
        </Collapse>
    );
};
