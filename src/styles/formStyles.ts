import styled from "@emotion/styled";
import { theme } from "./theme";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const FormButtonContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
`;

export const FormConfirmButton = styled.button`
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background-color: ${theme.colors.primary[600]};
  color: white;
  border: none;
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSizes.md};
  font-weight: ${theme.typography.fontWeights.medium};
  cursor: pointer;
  transition: background-color 0.2s ease;
`;