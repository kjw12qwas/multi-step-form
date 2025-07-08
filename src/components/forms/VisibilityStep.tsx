import {
  FormButtonContainer,
  FormConfirmButton,
  FormContainer,
} from "@/styles/formStyles";
import { useStepNavigation } from "@/hooks/useStepNavigation";

export default function VisibilityStep() {
  const { handlePrev, isLastStep } = useStepNavigation();

  return (
    <FormContainer>
      <h1>Visibility Step</h1>
      <FormButtonContainer>
        <FormConfirmButton onClick={handlePrev}>이전</FormConfirmButton>
        {isLastStep && <FormConfirmButton>완료</FormConfirmButton>}
      </FormButtonContainer>
    </FormContainer>
  );
}
