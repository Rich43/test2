import React, { FC, PropsWithChildren, useState } from 'react';
import { Course } from "../model/tableDataModel";
import { IconButton, TableCell } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export interface CollapsableTableViewCellProps {
    row: Course
}

export const CollapsibleTableViewCell: FC<PropsWithChildren<CollapsableTableViewCellProps>> = (props) => {
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
            {props.children}
        </>
    );
};

export default CollapsibleTableViewCell;
