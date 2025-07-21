import React from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

interface TextInputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  type?: "text" | "number";
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

  ${(props) =>
    props.htmlFor &&
    `
    cursor: pointer;
  `}
`;

const StyledInput = styled.input<{ hasError?: boolean }>`
  padding: ${theme.spacing.md};
  border: 2px solid
    ${(props) =>
      props.hasError ? theme.colors.error[300] : theme.colors.gray[300]};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSizes.md};
  transition: all 0.2s ease;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.hasError ? theme.colors.error[500] : theme.colors.primary[500]};
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.hasError ? theme.colors.error[100] : theme.colors.primary[100]};
  }

  &:disabled {
    background-color: ${theme.colors.gray[100]};
    color: ${theme.colors.gray[500]};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${theme.colors.gray[400]};
  }
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

export const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  type = "text",
  name,
  id,
}) => {
  const inputId = id || name;

  return (
    <InputContainer>
      {label && (
        <Label htmlFor={inputId}>
          {label}
          {required && <RequiredIndicator>*</RequiredIndicator>}
        </Label>
      )}
      <StyledInput
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        hasError={!!error}
        required={required}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};
