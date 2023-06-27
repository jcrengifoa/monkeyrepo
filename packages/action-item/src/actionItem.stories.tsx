import type { Meta, StoryObj } from '@storybook/react';

import { ActionItem } from './actionItem';

const meta = {
  title: '@mercedes-benz/action-item',
  component: ActionItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ActionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    title: 'Action Item title',
    onClick: () => {
      alert('Clicked');
    },
    Icon: () => <div>Icon</div>,
    disabled: false,
  },
};
