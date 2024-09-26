import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { HeaderView } from "./HeaderView";

const meta: Meta<typeof HeaderView> = {
  title: "Screens/Header",
  component: HeaderView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="min-w-[500px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof HeaderView>;

export const Default: Story = {
  args: {
    allowPermissionWarning: true,
  },
};

export const PermissionWarning: Story = {
  args: {
    allowPermissionWarning: false,
  },
};

export const ErrorState: Story = {
  args: {
    // Example: error: 'Failed to load dashboard data'
  },
};
