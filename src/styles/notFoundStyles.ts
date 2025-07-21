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

export const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.lg};
  max-width: 500px;
`; 