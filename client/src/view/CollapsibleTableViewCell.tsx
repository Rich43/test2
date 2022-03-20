import React, { FC, PropsWithChildren } from 'react';
import { Course } from "../model/tableDataModel";
import { IconButton, TableCell } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useAppDispatch, useAppSelector } from "../model/redux/hooks";
import { selectRows, updateRows } from "../model/redux/tableViewReducer";

export interface CollapsibleTableViewCellProps {
    row: Course
}

export const CollapsibleTableViewCell: FC<PropsWithChildren<CollapsibleTableViewCellProps>> = ({ row }) => {
    const tableViewSelector = useAppSelector(selectRows);
    const dispatcher = useAppDispatch();
    const matchingRow = tableViewSelector.find(reduxRow => reduxRow.id === row.id);
    const open = matchingRow ? matchingRow.open : false;

    return (
        <TableCell>
            <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => dispatcher(updateRows({ id: row.id, open: !open }))}
            >
                {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
            </IconButton>
        </TableCell>
    );
};

export default CollapsibleTableViewCell;
