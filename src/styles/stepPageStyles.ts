import styled from "@emotion/styled";
import { theme } from "./theme";

export const SplitLayout = styled.div`
  display: flex;
  height: 100vh;
  background-color: white;
  overflow-y: auto;
`;

export const FormSection = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: white;
  min-height: 100%;
`;

export const PreviewSection = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: white;
  min-height: 100%;
`;

export const LayoutHeader = styled.div`
  margin-bottom: 2rem;
`;

export const StepIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  gap: 0.5rem;
`;

export const StepDot = styled.div<{ $active: boolean; $completed: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${theme.typography.fontWeights.semibold};
  font-size: ${theme.typography.fontSizes.sm};
  transition: ${theme.transitions.all};
  background-color: ${(props) =>
    props.$completed
      ? theme.colors.success[500]
      : props.$active
      ? theme.colors.primary[500]
      : theme.colors.gray[200]};
  color: ${(props) =>
    props.$completed || props.$active ? "white" : theme.colors.gray[600]};
`;

export const StepLine = styled.div<{ $completed: boolean }>`
  width: 40px;
  height: 2px;
  background-color: ${(props) =>
    props.$completed ? theme.colors.success[500] : theme.colors.gray[200]};
  transition: ${theme.transitions.all};
`;

export const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSizes.xl};
  font-weight: ${theme.typography.fontWeights.semibold};
  color: ${theme.colors.gray[900]};
  margin: 0;
`;

export const ProgressInfo = styled.div`
  padding: 1rem;
  background: ${theme.colors.gray[50]};
  border-radius: ${theme.borderRadius.md};
  margin-bottom: 1rem;
  border: 1px solid ${theme.colors.gray[200]};
`; 