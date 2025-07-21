// 인용구 타입
export interface Quote {
  id: string;              // 고유 ID
  content: string;         // 인용구 내용 (필수)
  pageNumber?: number;     // 페이지 번호 (조건부) - 숫자만, 전체 페이지 수보다 작아야 함
}

// 인용구 정보 타입
export interface QuoteInfo {
  quotes: Quote[];         // 인용구 배열
}