import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DiscoverView } from "./DiscoverView";

const meta: Meta<typeof DiscoverView> = {
  title: "Screens/Discover",
  component: DiscoverView,
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
type Story = StoryObj<typeof DiscoverView>;

export const Default: Story = {
  args: {
    allowPermissionWarning: false,
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
