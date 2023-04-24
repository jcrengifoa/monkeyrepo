import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: '@jcrengifoa/button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
    onClick: () => {
      alert('Button Clicked');
    },
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    onClick: () => {
      alert('Secondary Button Clicked');
    },
  },
};
