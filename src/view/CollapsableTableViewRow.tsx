import { Collapse, TableCell, TableRow } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";
import { Course } from "../model/tableDataModel";
import { useAppSelector } from "../model/redux/hooks";
import { selectRows } from "../model/redux/tableViewReducer";

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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur gravida turpis non
                    scelerisque. Sed hendrerit lacinia odio. Nulla vitae ornare massa. Phasellus vitae scelerisque
                    lectus. Donec fermentum ultrices viverra. Duis vel ullamcorper velit, sit amet vestibulum justo.
                    Nunc neque dolor, vehicula ut volutpat ut, commodo ac nisi. Aliquam eu iaculis ante, at rutrum orci.
                    Suspendisse vel mi eget nulla consectetur convallis. Nullam placerat, tellus sit amet sodales
                    iaculis, neque massa porttitor elit, a rutrum neque erat nec libero. Suspendisse fringilla dui dui,
                    ac sollicitudin nibh tincidunt a. Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Aliquam posuere neque sit amet turpis finibus volutpat sit amet
                    id metus.

                    Pellentesque mattis urna lorem, facilisis consectetur ante interdum ut. Aenean id risus vel sem
                    rhoncus dapibus. Aliquam suscipit mauris id mi tincidunt convallis. Cras iaculis purus in turpis
                    eleifend, ac euismod nisi dapibus. Fusce hendrerit faucibus mattis. In facilisis urna ut ex
                    sollicitudin blandit. Quisque eu rhoncus augue, in ultrices nisl. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque eget libero massa.
                </Collapse>
            </TableCell>
        </TableRow>

    );
};
