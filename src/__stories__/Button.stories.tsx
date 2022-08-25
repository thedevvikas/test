// ---------------------------------------
// "XUI"
// Created by Vikas Kumar (@viktapas)
// © KredX (Minions Ventures Pvt. Ltd.)
// ---------------------------------------

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { XButton } from '../components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: XButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof XButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof XButton> = (args) => <XButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
};
export const Tertiary = Template.bind({});
Tertiary.args = {
  children: 'Tertiary Button',
};
