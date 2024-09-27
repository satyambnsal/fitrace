import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { CreatedWalletView } from "./CreatedWalletView";

const meta: Meta<typeof CreatedWalletView> = {
  title: "Screens/CreatedWallet",
  component: CreatedWalletView,
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
type Story = StoryObj<typeof CreatedWalletView>;

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
    walletAddress: "B62qk1KqJq2m59NJuPmHHWDFsejzc21Hr8gcHqWYfhM51dwpsVxtEQS",
    onClickCopy: () => console.log("copy address button clicked in story"),
    truncatedWalletAddress: "B62qk1KqJq...xtEQS",
  },
};

export const ErrorState: Story = {
  args: {
    // Example: error: 'Failed to load dashboard data'
  },
};
