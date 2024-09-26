import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { WelcomeScreenView } from "./WelcomeScreenView"; // Adjust the import path as needed

const meta: Meta<typeof WelcomeScreenView> = {
  title: "Screens/Welcome",
  component: WelcomeScreenView,
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
type Story = StoryObj<typeof WelcomeScreenView>;

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
    navigateToDashboard: () => console.log("navigate to dashboard"),
  },
};

export const ErrorState: Story = {
  args: {
    // Example: error: 'Failed to load dashboard data'
  },
};
