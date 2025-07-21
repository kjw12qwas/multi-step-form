// 추천 및 별점 타입
export interface RatingInfo {
  isRecommended?: boolean; // 추천 여부 (선택)
  rating: number;          // 별점 (필수) - 0 ~ 5, 0.5 단위
}
