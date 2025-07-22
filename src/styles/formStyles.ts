import styled from "@emotion/styled";
import { theme } from "./theme";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: ${theme.spacing.xl};
  gap: ${theme.spacing.xl};
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.sm};
  max-width: 600px;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};
`;