import { FormConfirmButton, FormContainer } from "@/styles/formStyles";
import { useStepNavigation } from "@/hooks/useStepNavigation";

export default function BookInfoStep() {
  const { handleNext, isFirstStep } = useStepNavigation();

  return (
    <FormContainer>
      <h1 aria-label="Book Info Step Title">Book Info</h1>
      {isFirstStep && (
        <FormConfirmButton onClick={handleNext} aria-label="Next Step Button">
          Next
        </FormConfirmButton>
      )}
    </FormContainer>
  );
}
