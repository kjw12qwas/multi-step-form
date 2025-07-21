import { BookInfo } from "./form/book";
import { RatingInfo } from "./form/rating";
import { ReviewInfo } from "./form/review";
import { QuoteInfo } from "./form/quote";
import { VisibilityInfo } from "./form/visibility";
import { ReadingStatus } from "./status";

// 전체 폼 데이터 타입
export interface FormData {
  step: number;            // 현재 단계
  bookInfo: BookInfo;
  ratingInfo: RatingInfo;
  reviewInfo: ReviewInfo;
  quoteInfo: QuoteInfo;
  visibilityInfo: VisibilityInfo;
}

// 초기 폼 데이터
export const initialFormData: FormData = {
  step: 1,
  bookInfo: {
    title: '',
    publishedDate: '',
    totalPages: 0,
    readingStatus: ReadingStatus.WANT_TO_READ,
    startDate: '',
    endDate: '',
  },
  ratingInfo: {
    isRecommended: false,
    rating: 0,
  },
  reviewInfo: {
    content: '',
  },
  quoteInfo: {
    quotes: [],
  },
  visibilityInfo: {
    isPublic: false,
  },
}; 