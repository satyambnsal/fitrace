import { Meta, StoryObj } from "@storybook/react";
import { ShoesInfoModalView } from "./ShoesInfoModalView";

const meta: Meta<typeof ShoesInfoModalView> = {
  title: "Screens/ShoesInfoModal",
  component: ShoesInfoModalView,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ShoesInfoModalView>;

// Basic story
export const Default: Story = {};
