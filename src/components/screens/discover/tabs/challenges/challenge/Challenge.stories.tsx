import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ChallengeView } from "./ChallengeView";

const meta: Meta<typeof ChallengeView> = {
  title: "Screens/Challenge",
  component: ChallengeView,
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
type Story = StoryObj<typeof ChallengeView>;

export const Default: Story = {
  args: {
    onBackClick: () => console.log("back clicked on story"),
    status: "started",
    isJoined: true,
  },
};
