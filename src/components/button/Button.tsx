import React from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const StyledButton = styled.button<{
  variant: string;
  size: string;
  fullWidth: boolean;
  disabled: boolean;
  $loading: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.xs};
  border: none;
  border-radius: ${theme.borderRadius.md};
  font-weight: ${theme.typography.fontWeights.medium};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  position: relative;
  user-select: none;

  /* Size variants */
  ${(props) => {
    switch (props.size) {
      case "sm":
        return `
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          font-size: ${theme.typography.fontSizes.sm};
          min-height: 32px;
        `;
      case "lg":
        return `
          padding: ${theme.spacing.lg} ${theme.spacing["2xl"]};
          font-size: ${theme.typography.fontSizes.lg};
          min-height: 48px;
        `;
      default: // md
        return `
          padding: ${theme.spacing.md} ${theme.spacing.xl};
          font-size: ${theme.typography.fontSizes.md};
          min-height: 40px;
        `;
    }
  }}

  /* Variant styles */
  ${(props) => {
    switch (props.variant) {
      case "secondary":
        return `
          background-color: ${theme.colors.gray[100]};
          color: ${theme.colors.gray[700]};
          &:hover:not(:disabled) {
            background-color: ${theme.colors.gray[200]};
          }
          &:active:not(:disabled) {
            background-color: ${theme.colors.gray[300]};
          }
        `;
      case "outline":
        return `
          background-color: transparent;
          color: ${theme.colors.primary[600]};
          border: 2px solid ${theme.colors.primary[600]};
          &:hover:not(:disabled) {
            background-color: ${theme.colors.primary[50]};
          }
          &:active:not(:disabled) {
            background-color: ${theme.colors.primary[100]};
          }
        `;
      case "ghost":
        return `
          background-color: transparent;
          color: ${theme.colors.gray[600]};
          &:hover:not(:disabled) {
            background-color: ${theme.colors.gray[100]};
            color: ${theme.colors.gray[700]};
          }
          &:active:not(:disabled) {
            background-color: ${theme.colors.gray[200]};
          }
        `;
      case "danger":
        return `
          background-color: ${theme.colors.error[600]};
          color: white;
          &:hover:not(:disabled) {
            background-color: ${theme.colors.error[700]};
          }
          &:active:not(:disabled) {
            background-color: ${theme.colors.error[800]};
          }
        `;
      default: // primary
        return `
          background-color: ${theme.colors.primary[600]};
          color: white;
          &:hover:not(:disabled) {
            background-color: ${theme.colors.primary[700]};
          }
          &:active:not(:disabled) {
            background-color: ${theme.colors.primary[800]};
          }
        `;
    }
  }}

  /* Disabled state */
  ${(props) =>
    props.disabled &&
    `
    opacity: 0.5;
    background-color: ${theme.colors.gray[300]} !important;
    color: ${theme.colors.gray[500]} !important;
  `}

  /* Focus state */
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${theme.colors.primary[100]};
  }

  /* Loading state */
  ${(props) =>
    props.$loading &&
    `
    color: transparent;
    pointer-events: none;
  `}
`;

const LoadingSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  loading = false,
  className,
  style,
}) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      variant={variant}
      size={size}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      $loading={loading}
      className={className}
      style={style}
    >
      {children}
      {loading && <LoadingSpinner />}
    </StyledButton>
  );
};
