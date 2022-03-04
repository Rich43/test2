import React from 'react';
import './App.css';
import { headers, rows } from "./model/tableDataModel";
import { TableView } from "./view/TableView";

function App() {
  return (
    <div className="App">
      <TableView headers={headers} rows={rows} />
    </div>
  );
}

export default App;
