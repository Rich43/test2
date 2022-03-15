import React, { FC, PropsWithChildren, useState } from 'react';
import { Course } from "../model/tableDataModel";
import { Collapse, IconButton, TableCell } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export interface CollapsableTableViwRowProps {
    row: Course
}

export const CollapsibleTableViewRow: FC<PropsWithChildren<CollapsableTableViwRowProps>> = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <TableCell>
                <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                </IconButton>
            </TableCell>
            <Collapse in={open} timeout="auto" unmountOnExit>
                Collapse content here
            </Collapse>
            {props.children}
        </>
    );
};

export default CollapsibleTableViewRow;
