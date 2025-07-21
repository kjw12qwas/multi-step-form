import { useState, useEffect } from 'react';
import { FormData, initialFormData } from '@/types/form';
import { validateFormData, validateStep } from '@/utils/validation';
import { ValidationError } from '@/types/validationError';

const STORAGE_KEY = 'multi-step-form-data';

export const useFormData = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // localStorage에서 데이터 로드
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem(STORAGE_KEY);
      if (savedData) {
        try {
          const parsedData = JSON.parse(savedData);
          setFormData(parsedData);
        } catch (error) {
          console.error('Failed to parse saved form data:', error);
        }
      }
      setIsLoaded(true);
    }
  }, []);

  // 데이터 저장 함수
  const saveFormData = (data: Partial<FormData>) => {
    const newData = { ...formData, ...data };
    setFormData(newData);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    }
  };

  // 특정 단계 데이터 업데이트
  const updateStepData = (step: keyof FormData, data: FormData[keyof FormData]) => {
    saveFormData({ [step]: data });
  };

  // 현재 단계 업데이트
  const updateCurrentStep = (step: number) => {
    saveFormData({ step });
  };

  // 폼 데이터 초기화
  const clearFormData = () => {
    setFormData(initialFormData);
    setErrors([]);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  // 저장된 데이터가 있는지 확인
  const hasSavedData = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(STORAGE_KEY) !== null;
    }
    return false;
  };

  // 유효성 검사
  const validateCurrentStep = () => {
    const stepErrors = validateStep(formData, formData.step);
    setErrors(stepErrors);
    return stepErrors.length === 0;
  };

  // 전체 유효성 검사
  const validateAll = () => {
    const allErrors = validateFormData(formData);
    setErrors(allErrors);
    return allErrors.length === 0;
  };

  // 특정 필드의 에러 가져오기
  const getFieldError = (field: string): string | undefined => {
    return errors.find(error => error.field === field)?.message;
  };

  // 에러 초기화
  const clearErrors = () => {
    setErrors([]);
  };

  // 인용구 추가
  const addQuote = () => {
    const newQuote = {
      id: Date.now().toString(),
      content: '',
      pageNumber: undefined,
    };
    
    const updatedQuotes = [...formData.quoteInfo.quotes, newQuote];
    updateStepData('quoteInfo', { ...formData.quoteInfo, quotes: updatedQuotes });
  };

  // 인용구 삭제
  const removeQuote = (quoteId: string) => {
    const updatedQuotes = formData.quoteInfo.quotes.filter(quote => quote.id !== quoteId);
    updateStepData('quoteInfo', { ...formData.quoteInfo, quotes: updatedQuotes });
  };

  // 인용구 업데이트
  const updateQuote = (quoteId: string, updates: Partial<{ content: string; pageNumber?: number }>) => {
    const updatedQuotes = formData.quoteInfo.quotes.map(quote =>
      quote.id === quoteId ? { ...quote, ...updates } : quote
    );
    updateStepData('quoteInfo', { ...formData.quoteInfo, quotes: updatedQuotes });
  };

  return {
    formData,
    errors,
    isLoaded,
    saveFormData,
    updateStepData,
    updateCurrentStep,
    clearFormData,
    hasSavedData,
    validateCurrentStep,
    validateAll,
    getFieldError,
    clearErrors,
    addQuote,
    removeQuote,
    updateQuote,
  };
}; 