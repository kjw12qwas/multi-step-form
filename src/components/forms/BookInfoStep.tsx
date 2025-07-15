import { FormConfirmButton, FormContainer } from "@/styles/formStyles";
import { useStepNavigation } from "@/hooks/useStepNavigation";

export default function BookInfoStep() {
  const { handleNext, isFirstStep } = useStepNavigation();

  return (
    <FormContainer>
      <h1>Book Info</h1>
      {isFirstStep && (
        <FormConfirmButton onClick={handleNext}>Next</FormConfirmButton>
      )}
    </FormContainer>
  );
}
