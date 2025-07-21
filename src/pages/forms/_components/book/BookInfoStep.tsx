import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { TextInput } from "@/components/textInput/TextInput";
import { Select } from "@/components/select/Select";
import { useStepNavigation } from "@/hooks/useStepNavigation";
import { useFormData } from "@/contexts/FormDataContext";
import { ReadingStatus } from "@/constants/readingStatus";
import {
  FormContainer,
  FormContent,
  ButtonContainer,
} from "@/styles/formStyles";
import { bookFields } from "./_constants/fields";

export default function BookInfoStep() {
  const { handleNext } = useStepNavigation();
  const { formData, updateFormData, errors, validateForm, clearFieldErrors } =
    useFormData();

  const handleInputChange = (field: string, value: string | number) => {
    updateFormData({
      bookInfo: {
        ...formData.bookInfo,
        [field]: value,
      },
    });

    if (field === bookFields.readingStatus) {
      clearFieldErrors(bookFields.readingStatus);
      clearFieldErrors(bookFields.startDate);
      clearFieldErrors(bookFields.endDate);
    } else {
      clearFieldErrors(field);
    }
  };

  const handleTitleChange = (value: string) => {
    handleInputChange(bookFields.title, value);
  };

  const handlePublishedDateChange = (value: string) => {
    handleInputChange(bookFields.publishedDate, value);
  };

  const handleTotalPagesChange = (value: string) => {
    const numValue = parseInt(value) || 0;
    // 음수가 되지 않도록 최소값 0으로 제한
    handleInputChange(bookFields.totalPages, Math.max(0, numValue));
  };

  const handleReadingStatusChange = (value: string) => {
    handleInputChange(bookFields.readingStatus, value);
  };

  const handleStartDateChange = (value: string) => {
    handleInputChange(bookFields.startDate, value);
  };

  const handleEndDateChange = (value: string) => {
    handleInputChange(bookFields.endDate, value);
  };

  const handleNextClick = () => {
    const isValid = validateForm();
    if (isValid) {
      handleNext();
    }
  };

  const getFieldError = (field: string): string => {
    const fieldError = errors.find((error) => error.field === field);
    return fieldError?.message || "";
  };

  return (
    <FormContainer>
      <FormContent>
        <Text variant="h1" color="primary" align="center">
          도서 정보
        </Text>

        <TextInput
          id="title"
          label="도서 제목"
          placeholder="도서 제목을 입력하세요"
          value={formData.bookInfo.title}
          onChange={handleTitleChange}
          error={getFieldError(bookFields.title)}
          required
        />

        <TextInput
          id="publishedDate"
          label="출판일"
          type="date"
          placeholder="출판일을 선택하세요"
          value={formData.bookInfo.publishedDate}
          onChange={handlePublishedDateChange}
          error={getFieldError(bookFields.publishedDate)}
          required
        />

        <TextInput
          id="totalPages"
          label="총 페이지 수"
          type="number"
          placeholder="총 페이지 수를 입력하세요"
          value={formData.bookInfo.totalPages.toString()}
          onChange={handleTotalPagesChange}
          error={getFieldError(bookFields.totalPages)}
          required
        />

        <Select
          id="readingStatus"
          label="독서 상태"
          value={formData.bookInfo.readingStatus}
          onChange={handleReadingStatusChange}
          error={getFieldError(bookFields.readingStatus)}
          options={[
            { value: ReadingStatus.WANT_TO_READ, label: "읽고 싶은 책" },
            { value: ReadingStatus.READING, label: "읽는 중" },
            { value: ReadingStatus.READ, label: "읽음" },
            { value: ReadingStatus.ON_HOLD, label: "보류중" },
          ]}
          required
        />

        {formData.bookInfo.readingStatus !== ReadingStatus.WANT_TO_READ && (
          <TextInput
            id="startDate"
            label="시작일"
            type="date"
            placeholder="읽기 시작한 날짜를 선택하세요"
            value={formData.bookInfo.startDate || ""}
            onChange={handleStartDateChange}
            error={getFieldError(bookFields.startDate)}
          />
        )}

        {formData.bookInfo.readingStatus === ReadingStatus.READ && (
          <TextInput
            id="endDate"
            label="종료일"
            type="date"
            placeholder="읽기를 완료한 날짜를 선택하세요"
            value={formData.bookInfo.endDate || ""}
            onChange={handleEndDateChange}
            error={getFieldError(bookFields.endDate)}
          />
        )}

        <ButtonContainer>
          <Button
            variant="primary"
            size="lg"
            onClick={handleNextClick}
            aria-label="Next Step Button"
          >
            다음
          </Button>
        </ButtonContainer>
      </FormContent>
    </FormContainer>
  );
}
