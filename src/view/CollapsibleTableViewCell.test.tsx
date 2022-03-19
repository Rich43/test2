import React from 'react';
import { Provider } from "react-redux";
import { render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { tableViewReducer, TableViewState } from '../model/redux/tableViewReducer';
import CollapsibleTableViewCell from './CollapsibleTableViewCell';


describe('CollapsibleTableViewCell', () => {
    it('renders a button that updates redux store when clicked', () => {
        const initialState: TableViewState = {
            rows: []
        };

        const createStore = () =>
            configureStore({
                reducer: {
                    [tableViewReducer.name]: tableViewReducer.reducer
                },
                preloadedState: { tableView: initialState }
            });

        render(
            <Provider store={createStore()}>
                <CollapsibleTableViewCell
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
            </Provider>
        );
        expect(screen.getByLabelText('expand row')).toBeInTheDocument();
    });
});