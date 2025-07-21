import React from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

interface CheckboxProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
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

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

const StyledCheckbox = styled.input<{ hasError?: boolean }>`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: ${theme.colors.primary[500]};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:focus {
    outline: 2px solid ${theme.colors.primary[500]};
    outline-offset: 2px;
  }
`;

const Label = styled.label<{ disabled?: boolean }>`
  font-size: ${theme.typography.fontSizes.md};
  color: ${(props) =>
    props.disabled ? theme.colors.gray[500] : theme.colors.gray[700]};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  user-select: none;
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

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  error,
  required = false,
  disabled = false,
  name,
  id,
}) => {
  const checkboxId = id || name;

  return (
    <InputContainer>
      <CheckboxWrapper>
        <StyledCheckbox
          id={checkboxId}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          hasError={!!error}
          required={required}
        />
        {label && (
          <Label htmlFor={checkboxId} disabled={disabled}>
            {label}
            {required && <RequiredIndicator>*</RequiredIndicator>}
          </Label>
        )}
      </CheckboxWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};
