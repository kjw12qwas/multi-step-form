import { RatingInfo } from "@/types/form/rating";
import { ValidationError } from "@/types/validationError";

// 별점 정보 유효성 검사
export const validateRatingInfo = (ratingInfo: RatingInfo): ValidationError[] => {
  const errors: ValidationError[] = [];

  // 별점 검사
  if (ratingInfo.rating === 0) {
    errors.push({ field: 'rating', message: '별점을 선택해주세요.' });
  }

  // 별점 범위 검사 (0.5 단위)
  if (ratingInfo.rating < 0 || ratingInfo.rating > 5 || ratingInfo.rating % 0.5 !== 0) {
    errors.push({ field: 'rating', message: '별점은 0~5 사이의 0.5 단위로 입력해주세요.' });
  }

  return errors;
};