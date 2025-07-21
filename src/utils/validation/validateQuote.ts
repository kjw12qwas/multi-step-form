import { QuoteInfo } from "@/types/form/quote";
import { ValidationError } from "@/types/validationError";

export const validateQuoteInfo = (quoteInfo: QuoteInfo, totalPages: number): ValidationError[] => {
  const errors: ValidationError[] = [];

  // 인용구가 2개 이상일 때 모든 페이지 번호 필수
  if (quoteInfo.quotes.length >= 2) {
    quoteInfo.quotes.forEach((quote, index) => {
      if (!quote.pageNumber) {
        errors.push({ 
          field: `quote${index}Page`, 
          message: '인용구가 2개 이상일 때는 모든 페이지 번호를 입력해주세요.' 
        });
      }
    });
  }

  // 페이지 번호가 총 페이지 수보다 큰지 검사
  quoteInfo.quotes.forEach((quote, index) => {
    if (quote.pageNumber && quote.pageNumber > totalPages) {
      errors.push({ 
        field: `quote${index}Page`, 
        message: `페이지 번호는 총 페이지 수(${totalPages}페이지)보다 작아야 합니다.` 
      });
    }
  });

  // 인용구 내용 필수
  quoteInfo.quotes.forEach((quote, index) => {
    if (!quote.content.trim()) {
      errors.push({ 
        field: `quote${index}Content`, 
        message: '인용구 내용을 입력해주세요.' 
      });
    }
  });

  return errors;
};