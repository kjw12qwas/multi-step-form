import BookInfoStep from "@/components/forms/BookInfoStep";
import QuoteStep from "@/components/forms/QuoteStep";
import RatingStep from "@/components/forms/RatingStep";
import ReviewStep from "@/components/forms/ReviewStep";
import VisibilityStep from "@/components/forms/VisibilityStep";
import NotFound from "@/pages/404";

// 각 단계에 대한 컴포넌트를 렌더링 하기 위한 함수 입니다.
export const renderStepComponent = (step: number) => {
  switch (step) {
    case 1:
      return BookInfoStep;
    case 2:
      return QuoteStep;
    case 3:
      return RatingStep;
    case 4:
      return ReviewStep;
    case 5:
      return VisibilityStep;
    default:
      return NotFound;
  }
};
