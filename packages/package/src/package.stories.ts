import type { Meta, StoryObj } from '@storybook/react';

import Package from './Package';

const meta = {
  title: '@monkeyrepo/package',
  component: Package,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Package>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Package text',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Secondary Package text',
  },
};
