import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Label } from '../components/label';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Label',
  component: Label,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Label>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Simple = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
  label: 'Simple',
  url: 'http://placeholder.io.com'
};

export const Advanced = Template.bind({});
Advanced.args = {
  label: 'Advanced',
};
