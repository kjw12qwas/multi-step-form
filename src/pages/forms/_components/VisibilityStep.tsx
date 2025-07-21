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
      <h1 aria-label="Visibility Step Title">Visibility Step</h1>
      <FormButtonContainer>
        <FormConfirmButton
          onClick={handlePrev}
          aria-label="Previous Step Button"
        >
          이전
        </FormConfirmButton>
        {isLastStep && (
          <FormConfirmButton aria-label="Complete Step Button">
            완료
          </FormConfirmButton>
        )}
      </FormButtonContainer>
    </FormContainer>
  );
}
