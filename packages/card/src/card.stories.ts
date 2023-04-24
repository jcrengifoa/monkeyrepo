import type { Meta, StoryObj } from '@storybook/react';

import Card from './Card';

const meta = {
  title: '@jcrengifoa/card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Card Title',
  },
};

export const Secondary: Story = {
  args: {
    title: 'Secondary Card Title',
  },
};
