import React from 'react';
import { screen } from '@testing-library/react';
import { SubTable } from "./SubTable";
import { render } from "../testUtil";

test('renders a table with two headers and five rows', () => {
    render(<SubTable headers={['ID', 'Name']} rows={
        [
            { id: '2', name: 'fred' },
            { id: '5', name: 'john' },
            { id: '8', name: 'jane' },
            { id: '368', name: 'jack' },
            { id: '776', name: 'jerry' }
        ]
    }/>);
    expect(screen.getByText(/fred/i)).toBeInTheDocument();
});
