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
      <h1 aria-label="Review Step Title">Review Step</h1>
      <FormButtonContainer>
        <FormConfirmButton
          onClick={handlePrev}
          aria-label="Previous Step Button"
        >
          이전
        </FormConfirmButton>
        <FormConfirmButton onClick={handleNext} aria-label="Next Step Button">
          다음
        </FormConfirmButton>
      </FormButtonContainer>
    </FormContainer>
  );
}
