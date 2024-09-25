import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastProvider, ToastViewport } from "../toast";
import { Button } from "../button";

const meta: Meta<typeof Toast> = {
  title: "UI/Toast",
  component: Toast,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: () => (
    <ToastProvider>
      <Toast>
        <div className="grid gap-1">
          Toast Title <br />
          Toast Description
          {/* <Toast.Title>Toast Title</Toast.Title> */}
          {/* <Toast.Description>Toast Description</Toast.Description> */}
        </div>
        <Button>Action</Button>
      </Toast>
      <ToastViewport />
    </ToastProvider>
  ),
};
