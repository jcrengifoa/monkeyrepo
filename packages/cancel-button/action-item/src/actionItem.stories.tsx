import type { Meta, StoryObj } from '@storybook/react';

import { ActionItem } from './ActionItem';

const meta = {
  title: '@mercedes-benz/item-action',
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
