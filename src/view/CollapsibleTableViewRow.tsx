import { Collapse, TableCell, TableRow } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";
import { Course } from "../model/tableDataModel";
import { useAppSelector } from "../model/redux/hooks";
import { selectRows } from "../model/redux/tableViewReducer";
import { SubTable } from "./SubTable";

export interface CollapsibleTableViewRowProps {
    row: Course,
    heading: string,
    tableHeaders: string[]
}

export const CollapsibleTableViewRow: FC<PropsWithChildren<CollapsibleTableViewRowProps>> = ({
                                                                                                 row,
                                                                                                 heading,
                                                                                                 tableHeaders
                                                                                             }) => {
    const tableViewSelector = useAppSelector(selectRows);
    const matchingRow = tableViewSelector.find(reduxRow => reduxRow.id === row.id);
    const open = matchingRow ? matchingRow.open : false;
    return (
        <TableRow>
            <TableCell colSpan={5}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <h2>{heading}</h2>
                    <SubTable headers={tableHeaders} rows={row.students}/>
                </Collapse>
            </TableCell>
        </TableRow>
    );
};
