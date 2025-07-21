import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TextArea } from "./TextArea";

const meta: Meta<typeof TextArea> = {
  title: "Components/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
    rows: {
      control: { type: "number", min: 1, max: 10 },
    },
    maxLength: {
      control: { type: "number", min: 1, max: 1000 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "설명",
    placeholder: "설명을 입력하세요",
    value: "",
    rows: 4,
  },
};

export const WithValue: Story = {
  args: {
    label: "리뷰",
    placeholder: "리뷰를 작성해주세요",
    value:
      "이 책은 정말 훌륭했습니다. 특히 캐릭터 개발과 플롯 구성이 인상적이었습니다.",
    rows: 5,
  },
};

export const WithMaxLength: Story = {
  args: {
    label: "짧은 메모",
    placeholder: "100자 이내로 입력하세요",
    value: "",
    maxLength: 100,
    rows: 3,
  },
};

export const Required: Story = {
  args: {
    label: "필수 입력",
    placeholder: "이 필드는 필수입니다",
    value: "",
    required: true,
    rows: 4,
  },
};

export const WithError: Story = {
  args: {
    label: "에러 상태",
    placeholder: "에러가 있는 입력",
    value: "잘못된 입력",
    error: "올바른 형식으로 입력해주세요.",
    rows: 4,
  },
};

export const Disabled: Story = {
  args: {
    label: "비활성화",
    value: "수정할 수 없는 텍스트입니다.",
    disabled: true,
    rows: 4,
  },
};

export const LargeTextArea: Story = {
  args: {
    label: "긴 텍스트",
    placeholder: "긴 텍스트를 입력하세요",
    value: "",
    rows: 8,
  },
};

// Interactive story with character count
export const Interactive: Story = {
  render: function InteractiveComponent() {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const handleChange = (newValue: string) => {
      setValue(newValue);
      setError("");

      if (newValue.length > 200) {
        setError("200자를 초과했습니다.");
      }
    };

    return (
      <div style={{ width: "400px" }}>
        <TextArea
          label="인터랙티브 텍스트 영역"
          placeholder="200자 이내로 입력해보세요"
          value={value}
          onChange={handleChange}
          error={error}
          maxLength={200}
          rows={5}
          required
        />
      </div>
    );
  },
};
