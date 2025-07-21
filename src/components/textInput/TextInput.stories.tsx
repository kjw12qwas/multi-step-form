import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TextInput } from "./TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "이름",
    placeholder: "이름을 입력하세요",
    value: "",
  },
};

export const WithValue: Story = {
  args: {
    label: "이메일",
    placeholder: "이메일을 입력하세요",
    value: "user@example.com",
    type: "email",
  },
};

export const Required: Story = {
  args: {
    label: "비밀번호",
    placeholder: "비밀번호를 입력하세요",
    value: "",
    type: "password",
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: "사용자명",
    placeholder: "사용자명을 입력하세요",
    value: "invalid-username",
    error: "사용자명은 영문자와 숫자만 사용할 수 있습니다.",
  },
};

export const Disabled: Story = {
  args: {
    label: "읽기 전용",
    value: "수정할 수 없는 값",
    disabled: true,
  },
};

export const NumberInput: Story = {
  args: {
    label: "나이",
    placeholder: "나이를 입력하세요",
    value: "",
    type: "number",
  },
};

// Interactive story with state
export const Interactive: Story = {
  render: function InteractiveComponent() {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const handleChange = (newValue: string) => {
      setValue(newValue);
      setError("");

      if (newValue.length > 0 && newValue.length < 3) {
        setError("최소 3자 이상 입력해주세요.");
      }
    };

    return (
      <div style={{ width: "300px" }}>
        <TextInput
          label="인터랙티브 입력"
          placeholder="3자 이상 입력해보세요"
          value={value}
          onChange={handleChange}
          error={error}
          required
        />
      </div>
    );
  },
};
