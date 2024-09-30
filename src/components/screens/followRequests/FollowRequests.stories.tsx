import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FollowRequestsView } from "./FollowRequestsView";

const meta: Meta<typeof FollowRequestsView> = {
  title: "Screens/Follow Requests",
  component: FollowRequestsView,
  parameters: {
    layout: "fullscreen",
  },
  // If your Dashboard requires any providers or context, add them here
  decorators: [
    (Story) => (
      <>
        <Story />
      </>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FollowRequestsView>;

// Basic story
export const Default: Story = {};

// You can add more stories here to show different states
export const LoadingState: Story = {
  args: {
    // If your Dashboard accepts props, you can pass them here
    // For example: isLoading: true
  },
};

export const WithData: Story = {
  args: {
    onBackClick: () => console.log("BACK BUTTON CLICKED ON STORY"),
  },
};

export const ErrorState: Story = {
  args: {
    // Example: error: 'Failed to load dashboard data'
  },
};
