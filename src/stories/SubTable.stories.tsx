import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SubTable } from "../view/SubTable";

export default {
  title: 'Tables/Sub Table',
  component: SubTable,
  argTypes: {
    headers: { control: 'array' },
    rows: { control: 'array' },
  },
} as ComponentMeta<typeof SubTable>;

const Template: ComponentStory<typeof SubTable> = (args) => <SubTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  headers: ['Header 1', 'Header 2'],
  rows: [{id: '1', name: 'Row 1'}, {id: '2', name: 'Row 2'}],
};

