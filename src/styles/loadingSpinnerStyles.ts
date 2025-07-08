
import styled from "@emotion/styled";
import { theme } from "./theme";
import { keyframes } from "@emotion/react";


const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: ${theme.spacing.lg};
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid ${theme.colors.gray[200]};
  border-top: 4px solid ${theme.colors.primary[600]};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const LoadingText = styled.p`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.typography.fontSizes.md};
  margin: 0;
`;