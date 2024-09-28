import { Meta, StoryObj } from "@storybook/react";
import { ChallengesView } from "./ChallengesView";

const meta: Meta<typeof ChallengesView> = {
  title: "Screens/Challenges",
  component: ChallengesView,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ChallengesView>;

// Basic story
export const Default: Story = {};
