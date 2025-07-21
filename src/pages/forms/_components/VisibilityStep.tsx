import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { useStepNavigation } from "@/hooks/useStepNavigation";
import {
  FormContainer,
  FormContent,
  ButtonContainer,
} from "@/styles/formStyles";

export default function VisibilityStep() {
  const { handlePrev, isLastStep } = useStepNavigation();

  return (
    <FormContainer>
      <FormContent>
        <Text variant="h1" color="primary">
          공개 설정
        </Text>

        {/* 여기에 공개 설정 필드들이 들어갈 예정 */}
        <Text variant="body" color="muted" align="center">
          독후감의 공개 여부를 설정해주세요
        </Text>

        <ButtonContainer>
          <Button
            variant="outline"
            onClick={handlePrev}
            aria-label="Previous Step Button"
          >
            이전
          </Button>
          {isLastStep && (
            <Button variant="primary" aria-label="Complete Step Button">
              완료
            </Button>
          )}
        </ButtonContainer>
      </FormContent>
    </FormContainer>
  );
}
