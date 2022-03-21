import React, { FunctionComponent, useEffect, useState } from 'react';
import { Courses } from "../model/tableDataModel";

interface Props {
}

const fetchData = () => fetch('/api');

function stripFunction (text: string) {
    let newText = text.trim();
    return newText.slice(
        newText.indexOf('(') + 1,
        (newText.length - 1) - newText.split('').reverse().join('').indexOf(')')
    );
}

const coursesDefaultValue = { courses: [] };
export const TableDataFetcherContext = React.createContext<Courses>(coursesDefaultValue);

export const TableDataFetcher: FunctionComponent<Props> = ({ children }) => {
    const [data, setData] = useState<Courses>(coursesDefaultValue);
    useEffect(() => {
        fetchData().then(result => {
            result.text().then(text => {
                let sanitisedText = text.startsWith('courses(') ? stripFunction(text) : text;
                const courses = JSON.parse(sanitisedText) as Courses; // I should probably use a type guard here
                setData(courses);
            });
        });
    }, []);
    return (<TableDataFetcherContext.Provider value={data}>{children}</TableDataFetcherContext.Provider>);
};
