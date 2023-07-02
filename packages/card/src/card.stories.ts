import type { Meta, StoryObj } from '@storybook/react';

import Card from './Card';

const meta = {
  title: '@monkeyrepo/card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
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
