import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { Rating } from "@/components/rating/Rating";
import { Checkbox } from "@/components/checkbox/Checkbox";
import { useStepNavigation } from "@/hooks/useStepNavigation";
import { useFormData } from "@/contexts/FormDataContext";
import {
  FormContainer,
  FormContent,
  ButtonContainer,
} from "@/styles/formStyles";
import { ratingFields } from "./book/_constants/fields";
import { theme } from "@/styles/theme";

export default function RatingStep() {
  const { handleNext, handlePrev } = useStepNavigation();
  const { formData, updateFormData, errors, validateForm, clearFieldErrors } =
    useFormData();

  const handleRatingChange = (value: number) => {
    updateFormData({
      ratingInfo: {
        ...formData.ratingInfo,
        rating: value,
      },
    });
    clearFieldErrors(ratingFields.rating);
  };

  const handleRecommendChange = (checked: boolean) => {
    updateFormData({
      ratingInfo: {
        ...formData.ratingInfo,
        isRecommended: checked,
      },
    });
    clearFieldErrors(ratingFields.isRecommended);
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

  return (
    <FormContainer>
      <FormContent>
        <Text variant="h1" color="primary" align="center">
          별점 및 추천
        </Text>

        <Text variant="body" color="muted" align="center">
          책에 대한 별점을 매기고 추천 여부를 선택해주세요
        </Text>

        <Rating
          label="별점"
          value={formData.ratingInfo.rating}
          onChange={handleRatingChange}
          step={0.5}
          error={getFieldError("rating")}
          required
        />

        {/* 별점에 따른 독후감 작성 요구사항 안내 */}
        {(formData.ratingInfo.rating === 1 ||
          formData.ratingInfo.rating === 5) && (
          <Text
            variant="body"
            color="primary"
            align="center"
            style={{
              fontSize: "0.875rem",
              padding: 8,
              backgroundColor: theme.colors.primary[100],
              borderRadius: 4,
            }}
          >
            별점이 {formData.ratingInfo.rating}점인 경우, 다음 단계에서 독후감을
            100자 이상 작성해주셔야 합니다.
          </Text>
        )}

        {formData.ratingInfo.rating >= 2 &&
          formData.ratingInfo.rating <= 4 &&
          formData.ratingInfo.rating > 0 && (
            <Text
              variant="body"
              color="success"
              align="center"
              style={{
                fontSize: "0.875rem",
                padding: 8,
                backgroundColor: "#d1fae5",
                borderRadius: 4,
              }}
            >
              별점이 {formData.ratingInfo.rating}점인 경우, 독후감 작성은
              선택사항입니다.
            </Text>
          )}

        <Checkbox
          label="이 책을 다른 사람에게 추천하시겠습니까?"
          checked={formData.ratingInfo.isRecommended || false}
          onChange={handleRecommendChange}
          error={getFieldError("isRecommended")}
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
