import { Meta, StoryObj } from "@storybook/react";
import { AccountScreenView } from "./AccountScreenView";

const meta: Meta<typeof AccountScreenView> = {
  title: "Screens/Accounts",
  component: AccountScreenView,
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
