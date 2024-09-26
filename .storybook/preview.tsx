import type { Preview } from "@storybook/react";
import "../src/App.css";
import "../src/styles/index.css";
import React from "react";

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Global theme for components",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "light",
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center justify-center bg-background">
          <div className="min-h-screen text-white bg-background">
            <Story />
          </div>
        </div>
      );
    },
  ],
};

export default preview;
