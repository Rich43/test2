import React, { FunctionComponent, useEffect, useState } from 'react';
import { Courses, fetchData, stripFunction, TableDataModel } from "../model/tableDataModel";

interface Props {
}

export const TableDataFetcherContext = React.createContext<TableDataModel[]>([]);

export const TableDataFetcher: FunctionComponent<Props> = ({ children }) => {
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
    }, [data]);
    return (<TableDataFetcherContext.Provider value={data}>{children}</TableDataFetcherContext.Provider>);
};
