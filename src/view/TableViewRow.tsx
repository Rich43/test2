import React, { FunctionComponent } from 'react';
import { TableDataModel } from "../model/tableDataModel";
import { TableCell, TableRow } from "@mui/material";

interface Props {
    row: TableDataModel
}

export const TableViewRow: FunctionComponent<Props> = ({ row }) => {
    return <TableRow
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
        {Object.keys(row).map(key => <TableCell>{row[key as keyof TableDataModel]}</TableCell>)}
    </TableRow>;
};

export default TableViewRow;
