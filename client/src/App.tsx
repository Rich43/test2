import React from 'react';
import './App.css';
import { headers } from "./model/tableDataModel";
import { TableView } from "./view/TableView";
import { TableDataFetcher, TableDataFetcherContext } from "./fetchers/TableDataFetcher";

function App () {
    return (
        <div className="App">
            <TableDataFetcher>
                <TableDataFetcherContext.Consumer>
                    {courses => <TableView headers={headers} rows={courses.courses}/>}
                </TableDataFetcherContext.Consumer>
            </TableDataFetcher>
        </div>
    );
}

export default App;
