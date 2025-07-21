import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { useStepNavigation } from "@/hooks/useStepNavigation";
import {
  FormContainer,
  FormContent,
  ButtonContainer,
} from "@/styles/formStyles";

export default function ReviewStep() {
  const { handleNext, handlePrev } = useStepNavigation();

  return (
    <FormContainer>
      <FormContent>
        <Text variant="h1" color="primary">
          독후감
        </Text>

        {/* 여기에 독후감 입력 필드들이 들어갈 예정 */}
        <Text variant="body" color="muted" align="center">
          책에 대한 독후감을 작성해주세요
        </Text>

        <ButtonContainer>
          <Button
            variant="outline"
            onClick={handlePrev}
            aria-label="Previous Step Button"
          >
            이전
          </Button>
          <Button
            variant="primary"
            onClick={handleNext}
            aria-label="Next Step Button"
          >
            다음
          </Button>
        </ButtonContainer>
      </FormContent>
    </FormContainer>
  );
}
