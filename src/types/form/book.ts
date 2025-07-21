import { ReadingStatus } from "../status";

// 도서 정보 타입
export interface BookInfo {
  title: string;           // 제목 (필수)
  publishedDate: string;   // 출판일 (필수) - YYYY-MM-DD 형식
  totalPages: number;      // 총 페이지 수 (필수)
  readingStatus: ReadingStatus; // 독서 상태 (필수)
  startDate?: string;      // 시작일 (조건부) - YYYY-MM-DD 형식
  endDate?: string;        // 종료일 (조건부) - YYYY-MM-DD 형식
}