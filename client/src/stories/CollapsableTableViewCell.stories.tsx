import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from "react-redux";
import { store } from "../model/redux/store";
import CollapsibleTableViewCell from "../view/CollapsibleTableViewCell";

export default {
    title: 'Tables/CollapsibleTableViewCell',
    component: CollapsibleTableViewCell,
    argTypes: {
        row: {
            control: {
                type: 'object'
            }
        }
    },
    decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof CollapsibleTableViewCell>;

const Template: ComponentStory<typeof CollapsibleTableViewCell> = (args) => <CollapsibleTableViewCell {...args} />;

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

