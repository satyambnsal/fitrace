import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TabBarView } from "./TabBarView";
import {
  CompassIcon,
  GraphIcon,
  HomeIcon,
  PersonIcon,
  ShoesIcon,
} from "./Icons";

const tabs = [
  { path: "/dashboard", icon: HomeIcon, label: "Home" },
  { path: "/leaderboard", icon: GraphIcon, label: "Leaderboard" },
  { path: "/notifications", icon: ShoesIcon, label: "Notifications" },
  { path: "/rules", icon: CompassIcon, label: "Rules" },
  { path: "/settings", icon: PersonIcon, label: "Settings" },
];

const meta: Meta<typeof TabBarView> = {
  title: "Screens/TabBar",
  component: TabBarView,
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
type Story = StoryObj<typeof TabBarView>;

export const Default: Story = {
  args: {
    tabs: tabs,
    activeTab: tabs[0].path,
    handleTabClick: () => console.log("clicked tabs in the story"),
  },
};
