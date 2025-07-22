import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  ReactNode,
} from "react";
import { FormData, initialFormData } from "@/types/form";
import { ValidationError } from "@/types/validation";
import { ReadingStatus } from "@/constants/readingStatus";
import { LOCAL_STORAGE_KEY } from "@/constants/localStorage";
import { validateBookInfo } from "@/utils/validation/validateBook";
import { validateRatingInfo } from "@/utils/validation/validateRating";
import { validateReviewInfo } from "@/utils/validation/validateReview";
import { validateQuoteInfo } from "@/utils/validation/validateQuote";
import { validateVisibilityInfo } from "@/utils/validation/validateVisibility";

interface FormDataContextType {
  formData: FormData;
  previewData: FormData;
  updateFormData: (updates: Partial<FormData>) => void;
  resetFormData: () => void;
  hasSavedData: () => boolean;
  isLoaded: boolean;
  errors: ValidationError[];
  validateForm: () => boolean;
  validateField: (field: string, currentStep?: number) => ValidationError[];
  clearFieldErrors: (field: string) => void;
}

const FormDataContext = createContext<FormDataContextType | undefined>(
  undefined
);

export const FormDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [previewData, setPreviewData] = useState<FormData>(initialFormData);
  const [isLoaded, setIsLoaded] = useState(false);
  const [errors, setErrors] = useState<ValidationError[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedData) {
        try {
          const parsedData = JSON.parse(savedData);
          setFormData(parsedData);
          setPreviewData(parsedData);
        } catch (error) {
          console.error("Error parsing saved data:", error);
        }
      }
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreviewData(formData);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [formData]);

  const updateFormData = useCallback((updates: Partial<FormData>) => {
    setFormData((prevData) => {
      let newData = { ...prevData, ...updates };

      // 독서 상태가 변경된 경우 관련 날짜 데이터 초기화
      if (
        updates.bookInfo?.readingStatus &&
        updates.bookInfo.readingStatus !== prevData.bookInfo.readingStatus
      ) {
        const newReadingStatus = updates.bookInfo.readingStatus;

        if (newReadingStatus === ReadingStatus.WANT_TO_READ) {
          newData = {
            ...newData,
            bookInfo: {
              ...newData.bookInfo,
              startDate: "",
              endDate: "",
            },
          };
        } else if (
          newReadingStatus === ReadingStatus.READING ||
          newReadingStatus === ReadingStatus.ON_HOLD
        ) {
          newData = {
            ...newData,
            bookInfo: {
              ...newData.bookInfo,
              endDate: "",
            },
          };
        }
      }

      // 로컬스토리지에 저장
      if (typeof window !== "undefined") {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newData));
      }
      return newData;
    });
  }, []);

  const resetFormData = useCallback(() => {
    setFormData(initialFormData);
    setPreviewData(initialFormData);
    setErrors([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  }, []);

  const hasSavedData = useCallback(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(LOCAL_STORAGE_KEY) !== null;
    }
    return false;
  }, []);

  const validateForm = useCallback(() => {
    const errors: ValidationError[] = [];

    // 현재 단계에 따른 유효성 검증
    switch (formData.step) {
      case 1:
        errors.push(...validateBookInfo(formData.bookInfo));
        break;
      case 2:
        errors.push(...validateRatingInfo(formData.ratingInfo));
        break;
      case 3:
        const reviewErrors = validateReviewInfo(
          formData.reviewInfo,
          formData.ratingInfo.rating
        );
        errors.push(...reviewErrors);
        break;
      case 4:
        errors.push(
          ...validateQuoteInfo(formData.quoteInfo, formData.bookInfo.totalPages)
        );
        break;
      case 5:
        errors.push(...validateVisibilityInfo(formData.visibilityInfo));
        break;
    }

    setErrors(errors);

    if (errors.length > 0) {
      setTimeout(() => {
        const firstError = errors[0];
        const element = document.querySelector(
          `input[id="${firstError.field}"], select[id="${firstError.field}"]`
        ) as HTMLElement;
        if (element) {
          element.focus();
        }
      }, 0);
    }

    return errors.length === 0;
  }, [formData]);

  const validateField = useCallback(
    (field: string, currentStep?: number): ValidationError[] => {
      let allErrors: ValidationError[] = [];

      const step = currentStep || formData.step;

      switch (step) {
        case 1:
          allErrors = validateBookInfo(formData.bookInfo);
          break;
        case 2:
          allErrors = validateRatingInfo(formData.ratingInfo);
          break;
        case 3:
          allErrors = validateReviewInfo(
            formData.reviewInfo,
            formData.ratingInfo.rating
          );
          break;
        case 4:
          allErrors = validateQuoteInfo(
            formData.quoteInfo,
            formData.bookInfo.totalPages
          );
          break;
        case 5:
          allErrors = validateVisibilityInfo(formData.visibilityInfo);
          break;
        default:
          allErrors = validateBookInfo(formData.bookInfo);
      }

      return allErrors.filter((error) => error.field === field);
    },
    [formData]
  );

  const clearFieldErrors = useCallback((field: string) => {
    setErrors((prevErrors) => {
      const filtered = prevErrors.filter((error) => {
        const shouldKeep = !error.field.includes(field);
        return shouldKeep;
      });
      return filtered;
    });
  }, []);

  const value: FormDataContextType = {
    formData,
    previewData,
    updateFormData,
    resetFormData,
    hasSavedData,
    isLoaded,
    errors,
    validateForm,
    validateField,
    clearFieldErrors,
  };

  return (
    <FormDataContext.Provider value={value}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = (): FormDataContextType => {
  const context = useContext(FormDataContext);
  if (context === undefined) {
    throw new Error("useFormData must be used within a FormDataProvider");
  }
  return context;
};
