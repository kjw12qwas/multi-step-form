import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TextInput } from "./textInput";
import { TextArea } from "./textarea";
import { Select } from "./select";
import { Rating } from "./rating";
import { Checkbox } from "./checkbox";

const meta: Meta = {
  title: "Components/All Inputs",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const selectOptions = [
  { value: "option1", label: "옵션 1" },
  { value: "option2", label: "옵션 2" },
  { value: "option3", label: "옵션 3" },
];

export const AllInputs: Story = {
  render: function AllInputsComponent() {
    const [formData, setFormData] = useState({
      text: "",
      textarea: "",
      select: "",
      rating: 0,
      checkbox: false,
    });

    const handleTextChange = (value: string) =>
      setFormData((prev) => ({ ...prev, text: value }));
    const handleTextareaChange = (value: string) =>
      setFormData((prev) => ({ ...prev, textarea: value }));
    const handleSelectChange = (value: string) =>
      setFormData((prev) => ({ ...prev, select: value }));
    const handleRatingChange = (value: number) =>
      setFormData((prev) => ({ ...prev, rating: value }));
    const handleCheckboxChange = (value: boolean) =>
      setFormData((prev) => ({ ...prev, checkbox: value }));

    return (
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
        <h1 style={{ marginBottom: "2rem", textAlign: "center" }}>
          모든 Input 컴포넌트
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div>
            <h2>TextInput</h2>
            <TextInput
              label="텍스트 입력"
              placeholder="텍스트를 입력하세요"
              value={formData.text}
              onChange={handleTextChange}
              required
            />
          </div>

          <div>
            <h2>TextArea</h2>
            <TextArea
              label="텍스트 영역"
              placeholder="긴 텍스트를 입력하세요"
              value={formData.textarea}
              onChange={handleTextareaChange}
              rows={4}
              maxLength={200}
            />
          </div>

          <div>
            <h2>Select</h2>
            <Select
              label="선택"
              placeholder="옵션을 선택하세요"
              value={formData.select}
              onChange={handleSelectChange}
              options={selectOptions}
              required
            />
          </div>

          <div>
            <h2>Rating</h2>
            <Rating
              label="평점"
              value={formData.rating}
              onChange={handleRatingChange}
              required
            />
          </div>

          <div>
            <h2>Checkbox</h2>
            <Checkbox
              label="동의합니다"
              checked={formData.checkbox}
              onChange={handleCheckboxChange}
              required
            />
          </div>
        </div>

        <div
          style={{
            marginTop: "2rem",
            padding: "1rem",
            backgroundColor: "#f5f5f5",
            borderRadius: "8px",
            fontSize: "0.875rem",
          }}
        >
          <h3>현재 폼 데이터:</h3>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      </div>
    );
  },
};
