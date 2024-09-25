import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { AccountScreenView } from "./AccountScreenView";
import { IonContent, IonPage } from "@ionic/react";

const meta: Meta<typeof AccountScreenView> = {
  title: "Screens/Accounts",
  component: AccountScreenView,
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
type Story = StoryObj<typeof AccountScreenView>;

export const Default: Story = {
  args: {
    createAccount: () => {
      console.log("create accont");
    },
    isLoading: false,
  },
};

export const LoadingState: Story = {
  args: {
    createAccount: () => {
      console.log("create accont");
    },
    isLoading: true,
  },
};

export const ErrorState: Story = {
  args: {
    // Example: error: 'Failed to load dashboard data'
  },
};
