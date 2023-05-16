import type { Meta, StoryObj } from '@storybook/react';

import Component from './Component';

const meta = {
  title: '@jcrengifoa/component',
  component: Component,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Component text',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Secondary Component text',
  },
};
