import { ReadingStatus } from "@/constants/readingStatus";
import { BookInfo } from "@/types/form/book";
import { ValidationError } from "@/types/validation";

// 도서 정보 유효성 검사
export const validateBookInfo = (bookInfo: BookInfo): ValidationError[] => {
  const errors: ValidationError[] = [];

  // 제목 검사
  if (!bookInfo.title.trim()) {
    errors.push({ field: 'title', message: '책 제목을 입력해주세요.' });
  }

  // 출판일 검사
  if (!bookInfo.publishedDate) {
    errors.push({ field: 'publishedDate', message: '출판일을 선택해주세요.' });
  }

  // 총 페이지 수 검사
  if (!bookInfo.totalPages || bookInfo.totalPages <= 0) {
    errors.push({ field: 'totalPages', message: '총 페이지 수를 입력해주세요.' });
  }

  // 독서 상태에 따른 시작일/종료일 검사
  switch (bookInfo.readingStatus) {
    case ReadingStatus.WANT_TO_READ:
      // 읽고 싶은 책: 시작일/종료일 모두 없어야 함
      if (bookInfo.startDate || bookInfo.endDate) {
        errors.push({ field: 'readingStatus', message: '읽고 싶은 책 상태에서는 시작일/종료일을 입력할 수 없습니다.' });
      }
      break;

    case ReadingStatus.READING:
    case ReadingStatus.ON_HOLD:
      // 읽는 중/보류 중: 시작일 필수, 종료일 없어야 함
      if (!bookInfo.startDate) {
        errors.push({ field: 'startDate', message: '시작일을 선택해주세요.' });
      }
      if (bookInfo.endDate) {
        errors.push({ field: 'endDate', message: '읽는 중/보류 중 상태에서는 종료일을 입력할 수 없습니다.' });
      }
      break;

    case ReadingStatus.READ:
      // 읽음: 시작일/종료일 모두 필수
      if (!bookInfo.startDate) {
        errors.push({ field: 'startDate', message: '시작일을 선택해주세요.' });
      }
      if (!bookInfo.endDate) {
        errors.push({ field: 'endDate', message: '종료일을 선택해주세요.' });
      }
      break;
  }

  // 날짜 순서 검사
  if (bookInfo.startDate && bookInfo.endDate) {
    const startDate = new Date(bookInfo.startDate);
    const endDate = new Date(bookInfo.endDate);
    
    if (startDate > endDate) {
      errors.push({ field: 'endDate', message: '종료일은 시작일 이후여야 합니다.' });
    }
  }

  // 시작일이 출판일 이후인지 검사
  if (bookInfo.startDate && bookInfo.publishedDate) {
    const startDate = new Date(bookInfo.startDate);
    const publishedDate = new Date(bookInfo.publishedDate);
    
    if (startDate < publishedDate) {
      errors.push({ field: 'startDate', message: '시작일은 출판일 이후여야 합니다.' });
    }
  }

  return errors;
};