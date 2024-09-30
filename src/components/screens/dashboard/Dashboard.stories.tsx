import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DashboardView } from "./DashboardView"; // Adjust the import path as needed

const meta: Meta<typeof DashboardView> = {
  title: "Screens/Dashboard",
  component: DashboardView,
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
type Story = StoryObj<typeof DashboardView>;

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
    // Example data
    seeAllClick: () => console.log("CLICKED ON SEE ALL ON STORY"),
  },
};

export const ErrorState: Story = {
  args: {
    // Example: error: 'Failed to load dashboard data'
  },
};
