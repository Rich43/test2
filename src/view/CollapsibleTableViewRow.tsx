import React, { FunctionComponent } from 'react';
import { Course } from "../model/tableDataModel";
import TableViewRow from "./TableViewRow";

interface Props {
    row: Course
}

const CollapsibleTableViewRow: FunctionComponent<Props> = ({ row }) => {
    return (<TableViewRow row={row}/>);
};

export default CollapsibleTableViewRow;
