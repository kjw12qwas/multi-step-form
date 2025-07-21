import { ReviewInfo } from "@/types/form/review";
import { ValidationError } from "@/types/validationError";

// 독후감 유효성 검사
export const validateReviewInfo = (reviewInfo: ReviewInfo, rating: number): ValidationError[] => {
  const errors: ValidationError[] = [];

  // 별점이 1점 또는 5점일 때 독후감 필수 (100자 이상)
  if (rating === 1 || rating === 5) {
    if (!reviewInfo.content.trim()) {
      errors.push({ field: 'reviewContent', message: '별점이 1점 또는 5점일 때는 독후감을 작성해주세요.' });
    } else if (reviewInfo.content.trim().length < 100) {
      errors.push({ field: 'reviewContent', message: '독후감은 100자 이상 작성해주세요.' });
    }
  }

  return errors;
};
