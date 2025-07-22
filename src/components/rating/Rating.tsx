import React from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

interface RatingProps {
  label?: string;
  value: number;
  onChange: (value: number) => void;
  max?: number;
  step?: number;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${theme.spacing.lg};
  width: 100%;
`;

const Label = styled.label`
  font-size: ${theme.typography.fontSizes.sm};
  font-weight: ${theme.typography.fontWeights.medium};
  color: ${theme.colors.gray[700]};
  margin-bottom: ${theme.spacing.xs};
`;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
`;

const RangeSlider = styled.input`
  flex: 1;
  height: 6px;
  border-radius: 3px;
  background: ${theme.colors.gray[200]};
  outline: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const RatingText = styled.span`
  font-size: ${theme.typography.fontSizes.sm};
  color: ${theme.colors.gray[600]};
  min-width: 80px;
  text-align: center;
`;

const ErrorMessage = styled.span`
  color: ${theme.colors.error[600]};
  font-size: ${theme.typography.fontSizes.sm};
  margin-top: ${theme.spacing.xs};
`;

const RequiredIndicator = styled.span`
  color: ${theme.colors.error[500]};
  margin-left: ${theme.spacing.xs};
`;

const ratingLabels = ["매우 나쁨", "나쁨", "보통", "좋음", "매우 좋음"];

export const Rating: React.FC<RatingProps> = ({
  label,
  value,
  onChange,
  max = 5,
  step = 0.5,
  error,
  required = false,
  disabled = false,
}) => {
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      const newValue = parseFloat(event.target.value);
      onChange(newValue);
    }
  };

  const getRatingLabel = (rating: number): string => {
    if (rating === 0) return "선택해주세요";
    const index = Math.ceil(rating) - 1;
    return `${rating}점 - ${ratingLabels[index] || "매우 좋음"}`;
  };

  return (
    <InputContainer>
      {label && (
        <Label>
          {label}
          {required && <RequiredIndicator>*</RequiredIndicator>}
        </Label>
      )}
      <RatingContainer>
        <SliderContainer>
          <RangeSlider
            type="range"
            min="0"
            max={max}
            step={step}
            value={value}
            onChange={handleSliderChange}
            disabled={disabled}
            aria-label={`별점 선택: ${value}점`}
          />
          <RatingText>{getRatingLabel(value)}</RatingText>
        </SliderContainer>
      </RatingContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};
