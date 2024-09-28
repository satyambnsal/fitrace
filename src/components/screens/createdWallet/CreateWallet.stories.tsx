import { Meta, StoryObj } from "@storybook/react";
import { CreatedWalletView } from "./CreatedWalletView";

const meta: Meta<typeof CreatedWalletView> = {
  title: "Screens/CreatedWallet",
  component: CreatedWalletView,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof CreatedWalletView>;

export const Default: Story = {
  args: {
    onClickCopy: () => console.log("copy address button clicked in story"),
    truncatedWalletAddress: "B62qk1KqJq...xtEQS",
    onClickContinue: () => console.log("CONTINUE CLICKED IN STORY"),
  },
};
