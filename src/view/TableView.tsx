import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Courses, fetchData, stripFunction, TableDataModel } from "../model/tableDataModel";
import { FC, useEffect, useState } from "react";

interface TableViewProps {
    headers: string[]
    rows: TableDataModel[]
}


export const TableView: FC<TableViewProps> = ({headers, rows}) => {
    const [data, setData] = useState<TableDataModel[]>([]);
    useEffect(() => {
        fetchData().then(result => {
            result.text().then(text => {
                let sanitisedText = stripFunction(text);
                const parsedText = JSON.parse(sanitisedText) as Courses; // I should probably use a type guard here
                let tableRows: TableDataModel[] = [];
                parsedText.courses.forEach(course => {
                    tableRows.push({
                        courseId: parseInt(course.id),
                        startDate: course.start,
                        endDate: course.end,
                        qualificationType: course.qualification
                    });
                });
                setData(tableRows);
            });
        });
    }, data);
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {headers.map(row => (<TableCell>{row}</TableCell>))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.courseId}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {Object.keys(row).map(key => <TableCell>{row[key as keyof TableDataModel]}</TableCell>)}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
