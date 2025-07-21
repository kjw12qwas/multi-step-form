import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "동의합니다",
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    label: "이미 체크된 항목",
    checked: true,
  },
};

export const Required: Story = {
  args: {
    label: "필수 동의",
    checked: false,
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: "에러 상태",
    checked: false,
    error: "이 항목에 동의해야 합니다.",
  },
};

export const Disabled: Story = {
  args: {
    label: "비활성화",
    checked: true,
    disabled: true,
  },
};

export const DisabledUnchecked: Story = {
  args: {
    label: "비활성화 (체크 안됨)",
    checked: false,
    disabled: true,
  },
};

export const LongLabel: Story = {
  args: {
    label:
      "매우 긴 라벨 텍스트입니다. 이 체크박스는 사용자 약관에 동의하는 항목으로, 매우 중요한 내용을 포함하고 있습니다.",
    checked: false,
  },
};

// Interactive story
export const Interactive: Story = {
  render: function InteractiveComponent() {
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (newChecked: boolean) => {
      setChecked(newChecked);
      setError("");

      if (!newChecked) {
        setError("이 항목에 동의해야 합니다.");
      }
    };

    return (
      <div style={{ width: "300px" }}>
        <Checkbox
          label="인터랙티브 체크박스"
          checked={checked}
          onChange={handleChange}
          error={error}
          required
        />
        <div style={{ marginTop: "1rem", fontSize: "0.875rem", color: "#666" }}>
          상태: {checked ? "체크됨" : "체크 안됨"}
        </div>
      </div>
    );
  },
};
