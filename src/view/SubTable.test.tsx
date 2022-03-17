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
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'ID' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Name' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: '2' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: '5' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: '8' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: '368' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: '776' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'fred' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'john' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'jane' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'jack' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'jerry' })).toBeInTheDocument();
});

test('renders an empty table', () => {
    render(<SubTable headers={[]} rows={[]}/>);
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.queryByRole('columnheader')).toBeNull();
    expect(screen.queryAllByRole('cell')).toHaveLength(0);
    expect(screen.queryAllByRole('row')).toHaveLength(0);
    expect(screen.queryAllByRole('columnheader')).toHaveLength(0);
    expect(screen.queryAllByRole('rowheader')).toHaveLength(0);
});