import type { Preview } from "@storybook/react";
import "../src/App.css";
import "../src/styles/index.css";
import "../src/styles/variable.css";
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
        <div className="flex items-center justify-center bg-black">
          <div
            className="min-h-screen text-white bg-black"
            style={{ background: "black" }}
          >
            <Story />
          </div>
        </div>
      );
    },
  ],
};

export default preview;
