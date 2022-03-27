import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Course } from "../model/tableDataModel";
import { FC } from "react";
import { TableViewCells } from "./TableViewCells";
import { CollapsibleTableViewRow } from "./CollapsibleTableViewRow";
import CollapsibleTableViewCell from "./CollapsibleTableViewCell";
import { useAppSelector } from "../model/redux/hooks";
import { selectRows } from "../model/redux/tableViewReducer";

interface TableViewProps {
    headers: string[]
    rows: Course[]
}

export const TableView: FC<TableViewProps> = ({ headers, rows }) => {
    const tableViewSelector = useAppSelector(selectRows);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table" data-testid="parent-table">
                <TableHead data-testid="parent-table-head">
                    <TableRow data-testid="parent-table-head-row">
                        <TableCell data-testid="parent-table-head-cell-expand-collapse" sx={{ width: 50 }}>{/*Unneeded header for expand/collapse*/}</TableCell>
                        {headers.map(row => (<TableCell data-testid="parent-table-head-cell">{row}</TableCell>))}
                    </TableRow>
                </TableHead>
                <TableBody data-testid="parent-table-body">
                    {rows.map((row) => {
                            const matchingRow = tableViewSelector.find(reduxRow => reduxRow.id === row.id);
                            const open = matchingRow ? matchingRow.open : false;
                            return (
                                <>
                                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }} data-testid="parent-table-row">
                                        <CollapsibleTableViewCell row={row}/>
                                        <TableViewCells row={row}/>
                                    </TableRow>
                                    {open ? <CollapsibleTableViewRow row={row} heading='Students'
                                                                     tableHeaders={['ID', 'Name']}/> : <></>}
                                </>
                            );
                        }
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
