import type { Meta, StoryObj } from '@storybook/react';

import { CancelButton } from './CancelButton';

const meta = {
  title: '@mercedes-benz/cancel-button',
  component: CancelButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CancelButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    children: <div>Content</div>,
    handleClick: () => {
      alert('Click');
    },
  },
};

export const Contained: Story = {
  args: {
    children: <div>Content</div>,
    handleClick: () => {
      alert('Click');
    },
    variant: 'contained',
  },
};

export const Text: Story = {
  args: {
    children: <div>Content</div>,
    handleClick: () => {
      alert('Click');
    },
    variant: 'text',
  },
};
