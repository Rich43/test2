import React, { FunctionComponent } from 'react';
import { Course } from "../model/tableDataModel";
import { TableCell, TableRow } from "@mui/material";
import { CollapsableTableViwRowProps } from "./CollapsibleTableViewRow";

interface Props {
    row: Course,
    CollapsableTableViewRow: FunctionComponent<CollapsableTableViwRowProps>
}

export const TableViewRow: FunctionComponent<Props> = ({ row, CollapsableTableViewRow }) => {
    return <TableRow
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
        <CollapsableTableViewRow row={row}>
            {Object.keys(row).map(key => typeof row[key as keyof Course] === 'string' ?
                <TableCell>{row[key as keyof Course]}</TableCell> : <></>)}
        </CollapsableTableViewRow>
    </TableRow>;
};

export default TableViewRow;
