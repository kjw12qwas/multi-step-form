import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "body", "caption", "label"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
    },
    weight: {
      control: { type: "select" },
      options: ["normal", "medium", "semibold", "bold"],
    },
    color: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "success",
        "error",
        "warning",
        "muted",
        "white",
      ],
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right", "justify"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "기본 텍스트입니다.",
  },
};

export const Heading1: Story = {
  args: {
    children: "제목 1",
    variant: "h1",
  },
};

export const Heading2: Story = {
  args: {
    children: "제목 2",
    variant: "h2",
  },
};

export const Heading3: Story = {
  args: {
    children: "제목 3",
    variant: "h3",
  },
};

export const Body: Story = {
  args: {
    children: "본문 텍스트입니다. 이것은 일반적인 본문 내용을 나타냅니다.",
    variant: "body",
  },
};

export const Caption: Story = {
  args: {
    children: "캡션 텍스트",
    variant: "caption",
  },
};

export const Label: Story = {
  args: {
    children: "라벨 텍스트",
    variant: "label",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary 색상 텍스트",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary 색상 텍스트",
    color: "secondary",
  },
};

export const Success: Story = {
  args: {
    children: "Success 색상 텍스트",
    color: "success",
  },
};

export const Error: Story = {
  args: {
    children: "Error 색상 텍스트",
    color: "error",
  },
};

export const Muted: Story = {
  args: {
    children: "Muted 색상 텍스트",
    color: "muted",
  },
};

export const Center: Story = {
  args: {
    children: "중앙 정렬 텍스트",
    align: "center",
  },
};

export const Right: Story = {
  args: {
    children: "우측 정렬 텍스트",
    align: "right",
  },
};

export const Bold: Story = {
  args: {
    children: "굵은 텍스트",
    weight: "bold",
  },
};

export const Semibold: Story = {
  args: {
    children: "세미볼드 텍스트",
    weight: "semibold",
  },
};

export const Truncate: Story = {
  args: {
    children: "이것은 매우 긴 텍스트입니다. 이 텍스트는 잘려서 표시됩니다.",
    truncate: true,
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
        width: "400px",
      }}
    >
      <Text variant="h1">제목 1</Text>
      <Text variant="h2">제목 2</Text>
      <Text variant="h3">제목 3</Text>
      <Text variant="body">본문 텍스트</Text>
      <Text variant="caption">캡션 텍스트</Text>
      <Text variant="label">라벨 텍스트</Text>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Text color="primary">Primary 색상</Text>
      <Text color="secondary">Secondary 색상</Text>
      <Text color="success">Success 색상</Text>
      <Text color="error">Error 색상</Text>
      <Text color="warning">Warning 색상</Text>
      <Text color="muted">Muted 색상</Text>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Text size="xs">Extra Small 텍스트</Text>
      <Text size="sm">Small 텍스트</Text>
      <Text size="md">Medium 텍스트</Text>
      <Text size="lg">Large 텍스트</Text>
      <Text size="xl">Extra Large 텍스트</Text>
      <Text size="2xl">2XL 텍스트</Text>
      <Text size="3xl">3XL 텍스트</Text>
    </div>
  ),
};
