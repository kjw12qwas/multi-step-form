import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Rating } from "./Rating";

const meta: Meta<typeof Rating> = {
  title: "Components/Rating",
  component: Rating,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
    max: {
      control: { type: "number", min: 1, max: 10 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "평점",
    value: 0,
    max: 5,
  },
};

export const WithValue: Story = {
  args: {
    label: "전체 평점",
    value: 4,
    max: 5,
  },
};

export const Required: Story = {
  args: {
    label: "필수 평점",
    value: 0,
    max: 5,
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: "에러 상태",
    value: 0,
    max: 5,
    error: "평점을 선택해주세요.",
  },
};

export const Disabled: Story = {
  args: {
    label: "비활성화",
    value: 3,
    max: 5,
    disabled: true,
  },
};

export const TenStarRating: Story = {
  args: {
    label: "10점 만점",
    value: 7,
    max: 10,
  },
};

export const ThreeStarRating: Story = {
  args: {
    label: "3점 만점",
    value: 2,
    max: 3,
  },
};

// Interactive story
export const Interactive: Story = {
  render: function InteractiveComponent() {
    const [rating, setRating] = useState(0);
    const [error, setError] = useState("");

    const handleRatingChange = (newRating: number) => {
      setRating(newRating);
      setError("");

      if (newRating === 0) {
        setError("평점을 선택해주세요.");
      }
    };

    return (
      <div style={{ width: "300px" }}>
        <Rating
          label="인터랙티브 평점"
          value={rating}
          onChange={handleRatingChange}
          error={error}
          required
        />
        <div style={{ marginTop: "1rem", fontSize: "0.875rem", color: "#666" }}>
          선택된 평점: {rating}점
        </div>
      </div>
    );
  },
};
