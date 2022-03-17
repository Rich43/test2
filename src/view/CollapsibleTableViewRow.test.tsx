import React from 'react';
import { CollapsibleTableViewRow } from './CollapsibleTableViewRow';
import { Provider } from "react-redux";
import { render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { tableViewReducer, TableViewState } from '../model/redux/tableViewReducer';

const initialState: TableViewState = {
    rows: [
        {
            id: '1',
            open: true
        }
    ]
};

const createStore = () =>
    configureStore({
        reducer: {
            [tableViewReducer.name]: tableViewReducer.reducer
        },
        preloadedState: { tableView: initialState }
    });

describe('CollapsibleTableViewRow', () => {
    it('renders a collapsible table row with a heading and a list of students (john + jane doe)', () => {
        render(
            <Provider store={createStore()}>
                <CollapsibleTableViewRow
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
                    heading='Table of students'
                    tableHeaders={['ID', 'Name']}
                />
            </Provider>
        );
        expect(screen.getByRole('heading', { name: 'Table of students' })).toBeInTheDocument();
        expect(screen.getByRole('columnheader', { name: 'ID' })).toBeInTheDocument();
        expect(screen.getByRole('columnheader', { name: 'Name' })).toBeInTheDocument();
        expect(screen.getByRole('cell', { name: 'John Doe' })).toBeInTheDocument();
        expect(screen.getByRole('cell', { name: 'Jane Doe' })).toBeInTheDocument();
        expect(screen.getByRole('cell', { name: '10' })).toBeInTheDocument();
        expect(screen.getByRole('cell', { name: '11' })).toBeInTheDocument();
    });
});

