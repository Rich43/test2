import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TableViewCells from "../view/TableViewCells";

export default {
    title: 'Tables/TableViewCells',
    component: TableViewCells,
    argTypes: {
        row: {
            control: {
                type: 'object'
            }
        }
    },
} as ComponentMeta<typeof TableViewCells>;

const Template: ComponentStory<typeof TableViewCells> = (args) => <TableViewCells {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    row: {
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
};

