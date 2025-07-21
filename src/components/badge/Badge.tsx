import React from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

export type BadgeVariant = "success" | "warning" | "info" | "error" | "default";
export type BadgeSize = "sm" | "md" | "lg";

interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const StyledBadge = styled.span<{
  variant: BadgeVariant;
  size: BadgeSize;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.borderRadius.sm};
  font-weight: ${theme.typography.fontWeights.medium};
  white-space: nowrap;

  /* Size variants */
  ${(props) => {
    switch (props.size) {
      case "sm":
        return `
          padding: ${theme.spacing.xs} ${theme.spacing.sm};
          font-size: ${theme.typography.fontSizes.xs};
        `;
      case "lg":
        return `
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          font-size: ${theme.typography.fontSizes.md};
        `;
      default: // md
        return `
          padding: ${theme.spacing.xs} ${theme.spacing.sm};
          font-size: ${theme.typography.fontSizes.sm};
        `;
    }
  }}

  /* Color variants */
  ${(props) => {
    switch (props.variant) {
      case "success":
        return `
          background-color: ${theme.colors.success[100]};
          color: ${theme.colors.success[700]};
        `;
      case "warning":
        return `
          background-color: ${theme.colors.warning[100]};
          color: ${theme.colors.warning[700]};
        `;
      case "error":
        return `
          background-color: ${theme.colors.error[100]};
          color: ${theme.colors.error[700]};
        `;
      case "info":
        return `
          background-color: ${theme.colors.primary[100]};
          color: ${theme.colors.primary[700]};
        `;
      default:
        return `
          background-color: ${theme.colors.gray[100]};
          color: ${theme.colors.gray[700]};
        `;
    }
  }}
`;

export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  size = "md",
  children,
  className,
  style,
}) => {
  return (
    <StyledBadge
      variant={variant}
      size={size}
      className={className}
      style={style}
    >
      {children}
    </StyledBadge>
  );
};
