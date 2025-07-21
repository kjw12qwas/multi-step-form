import React from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

export type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body"
  | "caption"
  | "label";
export type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
export type TextWeight = "normal" | "medium" | "semibold" | "bold";
export type TextColor =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning"
  | "muted"
  | "white";
export type TextAlign = "left" | "center" | "right" | "justify";

export interface TextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColor;
  align?: TextAlign;
  truncate?: boolean;
  className?: string;
  as?: React.ElementType;
  style?: React.CSSProperties;
}

const StyledText = styled.div<{
  variant: string;
  size: string;
  weight: string;
  color: string;
  align: string;
  truncate: boolean;
}>`
  margin: 0;
  padding: 0;
  line-height: 1.5;

  /* Variant styles */
  ${(props) => {
    switch (props.variant) {
      case "h1":
        return `
          font-size: ${theme.typography.fontSizes.xl};
          font-weight: ${theme.typography.fontWeights.bold};
          line-height: 1.2;
        `;
      case "h2":
        return `
          font-size: ${theme.typography.fontSizes.lg};
          font-weight: ${theme.typography.fontWeights.semibold};
          line-height: 1.3;
        `;
      case "h3":
        return `
          font-size: ${theme.typography.fontSizes.md};
          font-weight: ${theme.typography.fontWeights.semibold};
          line-height: 1.4;
        `;
      case "h4":
      case "h5":
      case "h6":
        return `
          font-size: ${theme.typography.fontSizes.sm};
          font-weight: ${theme.typography.fontWeights.medium};
          line-height: 1.4;
        `;
      case "caption":
        return `
          font-size: ${theme.typography.fontSizes.xs};
          font-weight: ${theme.typography.fontWeights.normal};
          line-height: 1.4;
        `;
      case "label":
        return `
          font-size: ${theme.typography.fontSizes.sm};
          font-weight: ${theme.typography.fontWeights.medium};
          line-height: 1.4;
        `;
      default: // body
        return `
          font-size: ${theme.typography.fontSizes.md};
          font-weight: ${theme.typography.fontWeights.normal};
          line-height: 1.5;
        `;
    }
  }}

  /* Size override */
  ${(props) => {
    if (props.size) {
      switch (props.size) {
        case "xs":
          return `font-size: ${theme.typography.fontSizes.xs};`;
        case "sm":
          return `font-size: ${theme.typography.fontSizes.sm};`;
        case "lg":
          return `font-size: ${theme.typography.fontSizes.lg};`;
        case "xl":
          return `font-size: ${theme.typography.fontSizes.xl};`;
        case "2xl":
          return `font-size: 1.5rem;`;
        case "3xl":
          return `font-size: 1.875rem;`;
        default: // md
          return `font-size: ${theme.typography.fontSizes.md};`;
      }
    }
    return "";
  }}

  /* Weight override */
  ${(props) => {
    if (props.weight) {
      switch (props.weight) {
        case "medium":
          return `font-weight: ${theme.typography.fontWeights.medium};`;
        case "semibold":
          return `font-weight: ${theme.typography.fontWeights.semibold};`;
        case "bold":
          return `font-weight: ${theme.typography.fontWeights.bold};`;
        default: // normal
          return `font-weight: ${theme.typography.fontWeights.normal};`;
      }
    }
    return "";
  }}

  /* Color styles */
  ${(props) => {
    switch (props.color) {
      case "primary":
        return `color: ${theme.colors.primary[600]};`;
      case "secondary":
        return `color: ${theme.colors.gray[600]};`;
      case "success":
        return `color: ${theme.colors.success[600]};`;
      case "error":
        return `color: ${theme.colors.error[600]};`;
      case "warning":
        return `color: ${theme.colors.error[500]};`;
      case "muted":
        return `color: ${theme.colors.gray[500]};`;
      case "white":
        return `color: white;`;
      default:
        return `color: ${theme.colors.gray[900]};`;
    }
  }}

  /* Alignment */
  ${(props) => {
    switch (props.align) {
      case "center":
        return `text-align: center;`;
      case "right":
        return `text-align: right;`;
      case "justify":
        return `text-align: justify;`;
      default: // left
        return `text-align: left;`;
    }
  }}

  /* Truncate */
  ${(props) =>
    props.truncate &&
    `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`;

export const Text: React.FC<TextProps> = ({
  children,
  variant = "body",
  size,
  weight,
  color,
  align = "left",
  truncate = false,
  className,
  as,
  style,
}) => {
  return (
    <StyledText
      as={as}
      variant={variant}
      size={size || ""}
      weight={weight || ""}
      color={color || ""}
      align={align}
      truncate={truncate}
      className={className}
      style={style}
    >
      {children}
    </StyledText>
  );
};
