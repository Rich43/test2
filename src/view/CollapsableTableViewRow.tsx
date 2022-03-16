import { Collapse, TableCell, TableRow } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";
import { Course } from "../model/tableDataModel";
import { useAppSelector } from "../model/redux/hooks";
import { selectRows } from "../model/redux/tableViewReducer";
import { SubTable } from "./SubTable";

export interface CollapsableTableViewRowProps {
    row: Course,
    open: boolean
}

export const CollapsibleTableViewRow: FC<PropsWithChildren<CollapsableTableViewRowProps>> = ({ row }) => {
    const tableViewSelector = useAppSelector(selectRows);
    const matchingRow = tableViewSelector.find(reduxRow => reduxRow.id === row.id);
    const open = matchingRow ? matchingRow.open : false;
    return (
        <TableRow>
            <TableCell colSpan={5}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <h2>Students</h2>
                    <SubTable headers={['Id', 'Name']} rows={row.students}/>
                </Collapse>
            </TableCell>
        </TableRow>
    );
};
