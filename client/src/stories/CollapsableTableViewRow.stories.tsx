import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CollapsibleTableViewRow } from "../view/CollapsibleTableViewRow";
import { Provider } from "react-redux";
import { store } from "../model/redux/store";
import { Button } from '@mui/material';
import { useAppDispatch } from "../model/redux/hooks";
import { updateRows } from "../model/redux/tableViewReducer";

export default {
    title: 'Tables/CollapsibleTableViewRow',
    component: CollapsibleTableViewRow,
    argTypes: {
        row: {
            control: {
                type: 'object'
            }
        },
        heading: {
            control: {
                type: 'string'
            }
        },
        tableHeaders: {
            control: {
                type: 'array'
            }
        }
    },
    decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof CollapsibleTableViewRow>;

const WrapperComponent = (props: any) => {
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(updateRows({ id: '1', open: true }));
    };
    return (
        <>
            <Button onClick={handleClick}>Trigger redux action</Button>
            <CollapsibleTableViewRow {...props} />
        </>
    );
};

const Template: ComponentStory<typeof CollapsibleTableViewRow> = (args) => <WrapperComponent {...args} />;

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
    },
    heading: 'Table of students',
    tableHeaders: ['Id', 'Name']
};

