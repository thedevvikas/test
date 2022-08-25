// ---------------------------------------
// "XUI"
// Created by Vikas Kumar (@viktapas)
// © KredX (Minions Ventures Pvt. Ltd.)
// ---------------------------------------

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { XCard } from '../components';
import { Container } from '@mantine/core';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Card',
  component: XCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
  args: {
    shadow: "xs"
  }
} as ComponentMeta<typeof Container>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof XCard> = (args) => <XCard {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: 'Card',
};

export const Elevated = Template.bind({});
Elevated.args = {
  children: 'An elevated card',
  shadow:"md"
};
