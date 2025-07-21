import NotFound from "@/pages/404";
import BookInfoStep from "./BookInfoStep";
import QuoteStep from "./QuoteStep";
import RatingStep from "./RatingStep";
import ReviewStep from "./ReviewStep";
import VisibilityStep from "./VisibilityStep";

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
