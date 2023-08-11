import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: StoryFn = args => <Button {...args} />;

export const Default = Template.bind({});
