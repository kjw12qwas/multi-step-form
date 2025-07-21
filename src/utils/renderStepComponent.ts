import NotFound from "@/pages/404";
import BookInfoStep from "@/pages/forms/_components/book/BookInfoStep";
import QuoteStep from "@/pages/forms/_components/QuoteStep";
import RatingStep from "@/pages/forms/_components/RatingStep";
import ReviewStep from "@/pages/forms/_components/ReviewStep";
import VisibilityStep from "@/pages/forms/_components/VisibilityStep";

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