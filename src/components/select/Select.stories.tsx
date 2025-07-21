import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
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

const defaultOptions = [
  { value: "option1", label: "옵션 1" },
  { value: "option2", label: "옵션 2" },
  { value: "option3", label: "옵션 3" },
  { value: "option4", label: "옵션 4" },
];

const readingStatusOptions = [
  { value: "wantToRead", label: "읽고 싶음" },
  { value: "reading", label: "읽는 중" },
  { value: "read", label: "읽음" },
  { value: "onHold", label: "보류" },
];

export const Default: Story = {
  args: {
    label: "선택하세요",
    value: "",
    options: defaultOptions,
    placeholder: "옵션을 선택하세요",
  },
};

export const WithValue: Story = {
  args: {
    label: "독서 상태",
    value: "reading",
    options: readingStatusOptions,
    placeholder: "독서 상태를 선택하세요",
  },
};

export const Required: Story = {
  args: {
    label: "필수 선택",
    value: "",
    options: defaultOptions,
    placeholder: "반드시 선택해주세요",
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: "에러 상태",
    value: "",
    options: defaultOptions,
    placeholder: "선택해주세요",
    error: "필수 항목입니다.",
  },
};

export const Disabled: Story = {
  args: {
    label: "비활성화",
    value: "option2",
    options: defaultOptions,
    disabled: true,
  },
};

export const ManyOptions: Story = {
  args: {
    label: "많은 옵션",
    value: "",
    options: Array.from({ length: 20 }, (_, i) => ({
      value: `option${i + 1}`,
      label: `옵션 ${i + 1}`,
    })),
    placeholder: "20개 옵션 중 선택하세요",
  },
};

export const ReadingStatus: Story = {
  args: {
    label: "독서 상태",
    value: "",
    options: readingStatusOptions,
    placeholder: "독서 상태를 선택하세요",
    required: true,
  },
};
