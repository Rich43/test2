import React, { FunctionComponent, useState } from 'react';
import { Course } from "../model/tableDataModel";
import { Collapse, IconButton, TableCell } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export interface CollapsableTableViwRowProps {
    row: Course
}

export const CollapsibleTableViewRow: FunctionComponent<CollapsableTableViwRowProps> = ({ row, children }) => {
    const [open, setOpen] = useState(false);
    return (<Collapse in={open} timeout="auto" unmountOnExit>
        <TableCell>
            <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
            >
                {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
            </IconButton>
        </TableCell>
        {{ children }}
    </Collapse>);
};

export default CollapsibleTableViewRow;
