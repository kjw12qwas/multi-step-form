import {
  FormButtonContainer,
  FormConfirmButton,
  FormContainer,
} from "@/styles/formStyles";
import { useStepNavigation } from "@/hooks/useStepNavigation";

export default function ReviewStep() {
  const { handleNext, handlePrev } = useStepNavigation();

  return (
    <FormContainer>
      <h1>Review Step</h1>
      <FormButtonContainer>
        <FormConfirmButton onClick={handlePrev}>이전</FormConfirmButton>
        <FormConfirmButton onClick={handleNext}>다음</FormConfirmButton>
      </FormButtonContainer>
    </FormContainer>
  );
}
