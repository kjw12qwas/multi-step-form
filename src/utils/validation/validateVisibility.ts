import { VisibilityInfo } from "@/types/form/visibility";
import { ValidationError } from "@/types/validation";

export const validateVisibilityInfo = (visibilityInfo: VisibilityInfo): ValidationError[] => {
  const errors: ValidationError[] = [];

  // 공개 여부는 boolean이므로 별도 검사 불필요
  // 하지만 명시적으로 체크
  if (typeof visibilityInfo.isPublic !== 'boolean') {
    errors.push({ field: 'isPublic', message: '공개 여부를 선택해주세요.' });
  }

  return errors;
};