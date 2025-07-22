import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { TextArea } from "@/components/textarea/TextArea";
import { useStepNavigation } from "@/hooks/useStepNavigation";
import { useFormData } from "@/contexts/FormDataContext";
import {
  FormContainer,
  FormContent,
  ButtonContainer,
} from "@/styles/formStyles";
import { reviewFields } from "./book/_constants/fields";

const MIN_LENGTH = 100;

export default function ReviewStep() {
  const { handleNext, handlePrev } = useStepNavigation();
  const { formData, updateFormData, errors, validateForm, clearFieldErrors } =
    useFormData();

  const handleReviewChange = (value: string) => {
    updateFormData({
      reviewInfo: {
        ...formData.reviewInfo,
        content: value,
      },
    });
    clearFieldErrors(reviewFields.content);
  };

  const handleNextClick = () => {
    const isValid = validateForm();
    if (isValid) {
      handleNext();
    }
  };

  const getFieldError = (field: string): string => {
    const fieldError = errors.find((error) => error.field === field);
    return fieldError?.message || "";
  };

  const isReviewRequired =
    formData.ratingInfo.rating === 1 || formData.ratingInfo.rating === 5;
  const currentLength = formData.reviewInfo.content.length;

  return (
    <FormContainer>
      <FormContent>
        <Text variant="h1" color="primary" align="center">
          독후감
        </Text>

        <Text variant="body" color="muted" align="center">
          {isReviewRequired
            ? "별점이 1점 또는 5점인 경우, 의견을 뒷받침하기 위해 최소 100자 이상을 작성해주세요."
            : "책에 대한 독후감을 작성해주세요 (선택사항)"}
        </Text>

        {isReviewRequired && (
          <Text
            variant="body"
            color="muted"
            align="center"
            style={{ fontSize: "0.875rem" }}
          >
            현재 별점: {formData.ratingInfo.rating}점 -
            {currentLength >= MIN_LENGTH ? "✅" : "❌"} {currentLength}/
            {MIN_LENGTH}자
          </Text>
        )}

        <TextArea
          label="독후감"
          placeholder="책을 읽고 느낀 점, 인상 깊었던 부분, 추천하는 이유 등을 자유롭게 작성해주세요."
          value={formData.reviewInfo.content}
          onChange={handleReviewChange}
          error={getFieldError("reviewContent")}
          required={isReviewRequired}
          rows={6}
          maxLength={1000}
        />

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
            onClick={handleNextClick}
            aria-label="Next Step Button"
          >
            다음
          </Button>
        </ButtonContainer>
      </FormContent>
    </FormContainer>
  );
}
