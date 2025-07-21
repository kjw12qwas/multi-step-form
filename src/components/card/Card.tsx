import React from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

export type CardVariant = "default" | "elevated" | "outlined" | "filled";
export type CardSize = "sm" | "md" | "lg";

interface CardProps {
  variant?: CardVariant;
  size?: CardSize;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const StyledCard = styled.div<{
  variant: CardVariant;
  size: CardSize;
  $clickable: boolean;
}>`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  transition: ${theme.transitions.all};

  /* Size variants */
  ${(props) => {
    switch (props.size) {
      case "sm":
        return `padding: ${theme.spacing.md};`;
      case "lg":
        return `padding: ${theme.spacing["2xl"]};`;
      default: // md
        return `padding: ${theme.spacing.xl};`;
    }
  }}

  /* Variant styles */
  ${(props) => {
    switch (props.variant) {
      case "elevated":
        return `
          box-shadow: ${theme.shadows.lg};
          &:hover {
            box-shadow: ${theme.shadows.xl};
            transform: translateY(-2px);
          }
        `;
      case "outlined":
        return `
          border: 1px solid ${theme.colors.gray[200]};
          box-shadow: ${theme.shadows.none};
        `;
      case "filled":
        return `
          background-color: ${theme.colors.gray[50]};
          box-shadow: ${theme.shadows.none};
        `;
      default:
        return `
          box-shadow: ${theme.shadows.md};
          &:hover {
            box-shadow: ${theme.shadows.lg};
          }
        `;
    }
  }}

  /* Clickable styles */
  ${(props) =>
    props.$clickable &&
    `
    cursor: pointer;
    user-select: none;
    &:hover {
      transform: translateY(-1px);
    }
    &:active {
      transform: translateY(0);
    }
  `}
`;

export const Card: React.FC<CardProps> = ({
  variant = "default",
  size = "md",
  children,
  className,
  style,
  onClick,
}) => {
  return (
    <StyledCard
      variant={variant}
      size={size}
      $clickable={!!onClick}
      className={className}
      style={style}
      onClick={onClick}
    >
      {children}
    </StyledCard>
  );
};
