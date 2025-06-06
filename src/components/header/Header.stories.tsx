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
    onNotificationClicked: () => console.log("HI"),
    onLogoClick: () => console.log("HI"),
    title: "TITLE HERE",
    showTokens: false,
  },
};

export const PermissionWarning: Story = {
  args: {
    allowPermissionWarning: false,
    onNotificationClicked: () => console.log("HI"),
    onLogoClick: () => console.log("HI"),
    title: "TITLE HERE",
    showTokens: true,
    // showTokens?: boolean;
  },
};
