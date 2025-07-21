import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Text } from "../text/Text";
import { Button } from "../button/Button";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "elevated", "outlined", "filled"],
      description: "카드의 스타일 변형",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "카드의 크기",
    },
    onClick: {
      action: "clicked",
      description: "클릭 이벤트 핸들러",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 카드
export const Default: Story = {
  args: {
    children: (
      <div>
        <Text variant="h3" style={{ marginBottom: "1rem" }}>
          기본 카드
        </Text>
        <Text>이것은 기본 카드입니다. 다양한 내용을 담을 수 있습니다.</Text>
      </div>
    ),
  },
};

// 높은 카드
export const Elevated: Story = {
  args: {
    variant: "elevated",
    children: (
      <div>
        <Text variant="h3" style={{ marginBottom: "1rem" }}>
          높은 카드
        </Text>
        <Text>그림자가 더 강한 카드입니다. 호버 시 더 높아집니다.</Text>
      </div>
    ),
  },
};

// 아웃라인 카드
export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: (
      <div>
        <Text variant="h3" style={{ marginBottom: "1rem" }}>
          아웃라인 카드
        </Text>
        <Text>테두리가 있는 카드입니다. 그림자 없이 깔끔합니다.</Text>
      </div>
    ),
  },
};

// 채워진 카드
export const Filled: Story = {
  args: {
    variant: "filled",
    children: (
      <div>
        <Text variant="h3" style={{ marginBottom: "1rem" }}>
          채워진 카드
        </Text>
        <Text>배경색이 있는 카드입니다. 부드러운 느낌을 줍니다.</Text>
      </div>
    ),
  },
};

// 크기 변형
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
      <Card size="sm">
        <Text variant="h4">작은 카드</Text>
        <Text size="sm">작은 크기의 카드입니다.</Text>
      </Card>
      <Card size="md">
        <Text variant="h3">중간 카드</Text>
        <Text>중간 크기의 카드입니다.</Text>
      </Card>
      <Card size="lg">
        <Text variant="h2">큰 카드</Text>
        <Text size="lg">큰 크기의 카드입니다.</Text>
      </Card>
    </div>
  ),
};

// 클릭 가능한 카드
export const Clickable: Story = {
  args: {
    onClick: () => alert("카드가 클릭되었습니다!"),
    children: (
      <div>
        <Text variant="h3" style={{ marginBottom: "1rem" }}>
          클릭 가능한 카드
        </Text>
        <Text style={{ marginBottom: "1rem" }}>
          이 카드는 클릭할 수 있습니다. 호버 시 약간 위로 올라갑니다.
        </Text>
        <Button variant="primary" size="sm">
          액션 버튼
        </Button>
      </div>
    ),
  },
};

// 복잡한 내용
export const ComplexContent: Story = {
  args: {
    variant: "elevated",
    children: (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <Text variant="h3">프로젝트 카드</Text>
          <Text variant="caption" color="muted">
            2024.03.15
          </Text>
        </div>
        <Text style={{ marginBottom: "1rem" }}>
          멀티 스텝 폼 프로젝트입니다. React와 TypeScript를 사용하여
          개발되었습니다.
        </Text>
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
          <span
            style={{
              background: "#e0f2fe",
              color: "#0369a1",
              padding: "0.25rem 0.5rem",
              borderRadius: "4px",
              fontSize: "0.75rem",
            }}
          >
            React
          </span>
          <span
            style={{
              background: "#f0f9ff",
              color: "#0c4a6e",
              padding: "0.25rem 0.5rem",
              borderRadius: "4px",
              fontSize: "0.75rem",
            }}
          >
            TypeScript
          </span>
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <Button variant="primary" size="sm">
            보기
          </Button>
          <Button variant="outline" size="sm">
            편집
          </Button>
        </div>
      </div>
    ),
  },
};

// 모든 변형
export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "1rem",
      }}
    >
      <Card variant="default">
        <Text variant="h4">기본</Text>
        <Text size="sm">기본 카드 스타일</Text>
      </Card>
      <Card variant="elevated">
        <Text variant="h4">높은</Text>
        <Text size="sm">그림자가 강한 카드</Text>
      </Card>
      <Card variant="outlined">
        <Text variant="h4">아웃라인</Text>
        <Text size="sm">테두리가 있는 카드</Text>
      </Card>
      <Card variant="filled">
        <Text variant="h4">채워진</Text>
        <Text size="sm">배경색이 있는 카드</Text>
      </Card>
    </div>
  ),
};
