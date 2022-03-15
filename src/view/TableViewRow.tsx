import React, { FunctionComponent } from 'react';
import { Course } from "../model/tableDataModel";
import { TableCell, TableRow } from "@mui/material";
import { CollapsableTableViewCellProps } from "./CollapsibleTableViewCell";

interface Props {
    row: Course,
    CollapsableTableViewCell: FunctionComponent<CollapsableTableViewCellProps>
}

export const TableViewRow: FunctionComponent<Props> = ({ row, CollapsableTableViewCell }) => {
    return <TableRow
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
        <CollapsableTableViewCell row={row}>
            <>
                {Object.keys(row).map(key => typeof row[key as keyof Course] === 'string' ?
                    <TableCell>{row[key as keyof Course]}</TableCell> : <></>)}
            </>
        </CollapsableTableViewCell>
    </TableRow>;
};

export default TableViewRow;
