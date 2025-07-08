import styled from "@emotion/styled";
import { theme } from "./theme";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: ${theme.spacing.xl};
  gap: ${theme.spacing.lg};
`;

export const NotFoundTitle = styled.h1`
  font-size: 3rem;
  font-weight: ${theme.typography.fontWeights.bold};
  color: ${theme.colors.gray[800]};
  margin: 0;
`;

export const NotFoundMessage = styled.p`
  font-size: ${theme.typography.fontSizes.lg};
  color: ${theme.colors.gray[600]};
  margin: 0;
  max-width: 500px;
  line-height: 1.6;
`;

export const HomeButton = styled.button`
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background-color: ${theme.colors.primary[600]};
  color: white;
  border: none;
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSizes.md};
  font-weight: ${theme.typography.fontWeights.medium};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${theme.colors.primary[700]};
  }

  &:active {
    background-color: ${theme.colors.primary[800]};
  }
`; 