import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from "react-redux";
import { store } from "../model/redux/store";
import { TableView } from "../view/TableView";

export default {
    title: 'Tables/TableView',
    component: TableView,
    argTypes: {
        row: {
            control: {
                type: 'object'
            }
        }
    },
    decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof TableView>;

const Template: ComponentStory<typeof TableView> = (args) => <TableView {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    headers: ['Course Id', 'Start Date', 'End Date', 'Qualification Type'],
    rows: [
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
        },
        {
            id: '2',
            start: '05/05/2017',
            end: '07/09/2019',
            qualification: 'GCSE Art',
            students: [
                {
                    id: '20',
                    name: 'Joe Bloggs'
                },
                {
                    id: '21',
                    name: 'Jack Sparrow'
                }
            ]
        }
    ]
};
