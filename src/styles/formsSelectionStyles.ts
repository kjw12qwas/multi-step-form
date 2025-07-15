import styled from "@emotion/styled";
import { theme } from "./theme";

export const FormsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: ${theme.spacing.xl};
  gap: ${theme.spacing.xl};
`;

export const FormsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.xl};
  max-width: 800px;
  width: 100%;
`;

export const FormCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.xl};
  background-color: white;
  border: 2px solid ${theme.colors.gray[200]};
  border-radius: ${theme.borderRadius.lg};
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 200px;

  &:hover {
    border-color: ${theme.colors.primary[400]};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const PageTitle = styled.h1`
  font-size: ${theme.typography.fontSizes.xl};
  font-weight: ${theme.typography.fontWeights.bold};
  color: ${theme.colors.gray[800]};
  margin: 0 0 ${theme.spacing.xl} 0;
  text-align: center;
`;

export const CardTitle = styled.h2`
  font-size: ${theme.typography.fontSizes.lg};
  font-weight: ${theme.typography.fontWeights.semibold};
  color: ${theme.colors.gray[700]};
  margin: 0 0 ${theme.spacing.md} 0;
  text-align: center;
`;

export const FormButton = styled.button`
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