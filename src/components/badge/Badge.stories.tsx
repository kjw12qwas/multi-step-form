import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "warning", "info", "error", "default"],
      description: "배지의 색상 변형",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "배지의 크기",
    },
    children: {
      control: "text",
      description: "배지 내용",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 배지
export const Default: Story = {
  args: {
    children: "기본 배지",
  },
};

// 성공 배지
export const Success: Story = {
  args: {
    variant: "success",
    children: "성공",
  },
};

// 경고 배지
export const Warning: Story = {
  args: {
    variant: "warning",
    children: "경고",
  },
};

// 정보 배지
export const Info: Story = {
  args: {
    variant: "info",
    children: "정보",
  },
};

// 오류 배지
export const Error: Story = {
  args: {
    variant: "error",
    children: "오류",
  },
};

// 크기 변형
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Badge size="sm" variant="success">
        작은 배지
      </Badge>
      <Badge size="md" variant="info">
        중간 배지
      </Badge>
      <Badge size="lg" variant="warning">
        큰 배지
      </Badge>
    </div>
  ),
};

// 모든 변형
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Badge variant="default">기본</Badge>
      <Badge variant="success">성공</Badge>
      <Badge variant="warning">경고</Badge>
      <Badge variant="info">정보</Badge>
      <Badge variant="error">오류</Badge>
    </div>
  ),
};

// 긴 텍스트
export const LongText: Story = {
  args: {
    variant: "info",
    children: "매우 긴 배지 텍스트입니다",
  },
};

// 숫자 배지
export const NumberBadge: Story = {
  args: {
    variant: "error",
    children: "42",
  },
};

// 이모지 배지
export const EmojiBadge: Story = {
  args: {
    variant: "success",
    children: "🎉 완료",
  },
};
