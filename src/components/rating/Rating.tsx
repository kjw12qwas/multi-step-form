import React from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

interface RatingProps {
  label?: string;
  value: number;
  onChange: (value: number) => void;
  max?: number;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  name?: string;
  id?: string;
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
  align-items: center;
  gap: ${theme.spacing.sm};
`;

const StarButton = styled.button<{ filled: boolean; disabled: boolean }>`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: ${(props) =>
    props.filled ? theme.colors.primary[500] : theme.colors.gray[300]};
  transition: color 0.2s ease;
  padding: 0;
  line-height: 1;

  &:hover {
    color: ${(props) =>
      props.disabled ? theme.colors.gray[300] : theme.colors.primary[400]};
  }

  &:focus {
    outline: none;
    color: ${(props) =>
      props.filled ? theme.colors.primary[600] : theme.colors.primary[400]};
  }
`;

const RatingText = styled.span`
  font-size: ${theme.typography.fontSizes.sm};
  color: ${theme.colors.gray[600]};
  margin-left: ${theme.spacing.sm};
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
  error,
  required = false,
  disabled = false,
}) => {
  const handleStarClick = (starValue: number) => {
    if (!disabled) {
      onChange(starValue);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, starValue: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleStarClick(starValue);
    }
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
        {Array.from({ length: max }, (_, index) => {
          const starValue = index + 1;
          const filled = starValue <= value;

          return (
            <StarButton
              key={starValue}
              type="button"
              filled={filled}
              disabled={disabled}
              onClick={() => handleStarClick(starValue)}
              onKeyDown={(e) => handleKeyDown(e, starValue)}
              aria-label={`${starValue}점 ${filled ? "선택됨" : "선택 안됨"}`}
              tabIndex={disabled ? -1 : 0}
            >
              ★
            </StarButton>
          );
        })}
        <RatingText>
          {value > 0
            ? `${value}점 - ${ratingLabels[value - 1]}`
            : "선택해주세요"}
        </RatingText>
      </RatingContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};
