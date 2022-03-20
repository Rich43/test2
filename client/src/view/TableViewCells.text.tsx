import React from 'react';
import { screen } from '@testing-library/react';
import { render } from "../testUtil";
import { TableViewCells } from './TableViewCells';

test('renders four cells', () => {
    render(
        <TableViewCells
            row={
                {
                    id: '1',
                    start: '01/01/2005',
                    end: '01/01/2010',
                    qualification: 'BSc Software Engineering',
                    students: [
                        {
                            id: '10',
                            name: 'John Doe'
                        },
                        {
                            id: '11',
                            name: 'Jane Doe'
                        }
                    ]
                }
            }
        />
    );
    expect(screen.getByRole('cell', { name: '1' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: '01/01/2005' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: '01/01/2010' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'BSc Software Engineering' })).toBeInTheDocument();
});
