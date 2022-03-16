import React, { FC, PropsWithChildren, useState } from 'react';
import { Course } from "../model/tableDataModel";
import { IconButton, TableCell } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export interface CollapsableTableViewCellProps {
    row: Course
}

export const CollapsibleTableViewCellContext = React.createContext<boolean>(false);

export const CollapsibleTableViewCell: FC<PropsWithChildren<CollapsableTableViewCellProps>> = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <CollapsibleTableViewCellContext.Provider value={open}>
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
        </CollapsibleTableViewCellContext.Provider>
    );
};

export default CollapsibleTableViewCell;
