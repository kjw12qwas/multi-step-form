import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "outline", "ghost", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "버튼",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary 버튼",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary 버튼",
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline 버튼",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost 버튼",
    variant: "ghost",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger 버튼",
    variant: "danger",
  },
};

export const Small: Story = {
  args: {
    children: "Small 버튼",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large 버튼",
    size: "lg",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled 버튼",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: "Loading 버튼",
    loading: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width 버튼",
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "300px",
      }}
    >
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
