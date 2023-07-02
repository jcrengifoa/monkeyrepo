import type { Meta, StoryObj } from '@storybook/react';

import BasePackage from './BasePackage';

const meta = {
  title: '@monkeyrepo/basePackage',
  component: BasePackage,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BasePackage>;

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
