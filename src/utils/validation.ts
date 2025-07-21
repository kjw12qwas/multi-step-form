import { FormData } from "@/types/form";
import { ValidationError } from "@/types/validationError";
import { validateBookInfo } from "./validation/validateBook";
import { validateRatingInfo } from "./validation/validateRating";
import { validateReviewInfo } from "./validation/validateReview";
import { validateQuoteInfo } from "./validation/validateQuote";
import { validateVisibilityInfo } from "./validation/validateVisibility";

// 전체 폼 데이터 유효성 검사
export const validateFormData = (formData: FormData): ValidationError[] => {
  const errors: ValidationError[] = [];

  // 각 단계별 유효성 검사
  errors.push(...validateBookInfo(formData.bookInfo));
  errors.push(...validateRatingInfo(formData.ratingInfo));
  errors.push(...validateReviewInfo(formData.reviewInfo, formData.ratingInfo.rating));
  errors.push(...validateQuoteInfo(formData.quoteInfo, formData.bookInfo.totalPages));
  errors.push(...validateVisibilityInfo(formData.visibilityInfo));

  return errors;
};

// 특정 단계의 유효성 검사
export const validateStep = (formData: FormData, step: number): ValidationError[] => {
  switch (step) {
    case 1: // 도서 정보
      return validateBookInfo(formData.bookInfo);
    case 2: // 인용구
      return validateQuoteInfo(formData.quoteInfo, formData.bookInfo.totalPages);
    case 3: // 별점
      return validateRatingInfo(formData.ratingInfo);
    case 4: // 독후감
      return validateReviewInfo(formData.reviewInfo, formData.ratingInfo.rating);
    case 5: // 공개 여부
      return validateVisibilityInfo(formData.visibilityInfo);
    default:
      return [];
  }
}; 