import React from "react";
import { Text } from "@/components/text";
import { Badge } from "@/components/badge/Badge";
import { FormData } from "@/types/form";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

interface FormPreviewProps {
  data: FormData;
}

const PreviewContainer = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  height: 100%;
  overflow-y: auto;
  box-shadow: ${theme.shadows.lg};
`;

const PreviewSection = styled.div`
  margin-bottom: ${theme.spacing.lg};
  padding-bottom: ${theme.spacing.md};
  border-bottom: 1px solid ${theme.colors.gray[200]};

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.div`
  margin-bottom: ${theme.spacing.md};
`;

const PreviewField = styled.div`
  margin-bottom: ${theme.spacing.sm};
`;

const FieldLabel = styled.span`
  font-weight: ${theme.typography.fontWeights.medium};
  color: ${theme.colors.gray[700]};
  margin-right: ${theme.spacing.sm};
`;

const FieldValue = styled.span`
  color: ${theme.colors.gray[900]};
`;

const EmptyValue = styled.span`
  color: ${theme.colors.gray[400]};
  font-style: italic;
`;

const RatingDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

const Star = styled.span<{ filled: boolean }>`
  color: ${(props) => (props.filled ? "#fbbf24" : theme.colors.gray[300])};
  font-size: 1.2rem;
`;

const PageNumber = styled.div`
  font-size: ${theme.typography.fontSizes.sm};
  color: ${theme.colors.gray[500]};
  margin-top: ${theme.spacing.xs};
`;

export const FormPreview: React.FC<FormPreviewProps> = ({ data }) => {
  const renderField = (label: string, value: string | number | boolean) => {
    const displayValue =
      value === "" || value === 0 ? (
        <EmptyValue>입력되지 않음</EmptyValue>
      ) : (
        <FieldValue>{String(value)}</FieldValue>
      );

    return (
      <PreviewField>
        <FieldLabel>{label}:</FieldLabel>
        {displayValue}
      </PreviewField>
    );
  };

  const renderRating = (rating: number) => {
    return (
      <RatingDisplay>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} filled={star <= rating}>
            ★
          </Star>
        ))}
        <span>({rating}/5)</span>
      </RatingDisplay>
    );
  };

  return (
    <PreviewContainer>
      <SectionTitle>
        <Text variant="h2" color="primary">
          미리보기
        </Text>
      </SectionTitle>

      {/* 도서 정보 */}
      <PreviewSection>
        <SectionTitle>
          <Text variant="h3" color="secondary">
            도서 정보
          </Text>
        </SectionTitle>
        {renderField("제목", data.bookInfo.title)}
        {renderField("출판일", data.bookInfo.publishedDate)}
        {renderField("총 페이지", data.bookInfo.totalPages.toString())}
        {renderField("독서 상태", data.bookInfo.readingStatus)}
        {data.bookInfo.startDate &&
          renderField("시작일", data.bookInfo.startDate)}
        {data.bookInfo.endDate && renderField("종료일", data.bookInfo.endDate)}
      </PreviewSection>

      {/* 인용구 */}
      <PreviewSection>
        <SectionTitle>
          <Text variant="h3" color="secondary">
            인용구
          </Text>
        </SectionTitle>
        {data.quoteInfo.quotes.length > 0 ? (
          data.quoteInfo.quotes.map((quote, index) => (
            <PreviewField key={quote.id}>
              <FieldLabel>인용구 {index + 1}:</FieldLabel>
              <div>
                <div>{quote.content}</div>
                {quote.pageNumber && (
                  <PageNumber>페이지: {quote.pageNumber}</PageNumber>
                )}
              </div>
            </PreviewField>
          ))
        ) : (
          <EmptyValue>인용구가 없습니다</EmptyValue>
        )}
      </PreviewSection>

      {/* 별점 및 추천 */}
      <PreviewSection>
        <SectionTitle>
          <Text variant="h3" color="secondary">
            별점 및 추천
          </Text>
        </SectionTitle>
        <PreviewField>
          <FieldLabel>별점:</FieldLabel>
          {data.ratingInfo.rating > 0 ? (
            renderRating(data.ratingInfo.rating)
          ) : (
            <EmptyValue>평가되지 않음</EmptyValue>
          )}
        </PreviewField>
        <PreviewField>
          <FieldLabel>추천:</FieldLabel>
          {data.ratingInfo.isRecommended ? (
            <Badge variant="success">추천함</Badge>
          ) : (
            <Badge variant="warning">추천하지 않음</Badge>
          )}
        </PreviewField>
      </PreviewSection>

      {/* 독후감 */}
      <PreviewSection>
        <SectionTitle>
          <Text variant="h3" color="secondary">
            독후감
          </Text>
        </SectionTitle>
        {renderField("내용", data.reviewInfo.content)}
      </PreviewSection>

      {/* 공개 설정 */}
      <PreviewSection>
        <SectionTitle>
          <Text variant="h3" color="secondary">
            공개 설정
          </Text>
        </SectionTitle>
        <PreviewField>
          <FieldLabel>공개 여부:</FieldLabel>
          {data.visibilityInfo.isPublic ? (
            <Badge variant="info">공개</Badge>
          ) : (
            <Badge variant="warning">비공개</Badge>
          )}
        </PreviewField>
      </PreviewSection>
    </PreviewContainer>
  );
};
