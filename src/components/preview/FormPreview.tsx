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

const PreviewField = styled.div`
  margin-bottom: ${theme.spacing.sm};
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

export const FormPreview: React.FC<FormPreviewProps> = ({ data }) => {
  const renderField = (label: string, value: string | number | boolean) => {
    const displayValue =
      value === "" || value === 0 ? (
        <Text variant="body" color="muted" style={{ fontStyle: "italic" }}>
          입력되지 않음
        </Text>
      ) : (
        <Text variant="body" color="primary" style={{ whiteSpace: "pre-wrap" }}>
          {String(value)}
        </Text>
      );

    return (
      <PreviewField>
        <Text
          variant="body"
          color="secondary"
          style={{ marginRight: theme.spacing.sm, display: "inline" }}
        >
          {label}:
        </Text>
        {displayValue}
      </PreviewField>
    );
  };

  const renderRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <RatingDisplay>
        {[1, 2, 3, 4, 5].map((star) => {
          let starContent = "★";
          let isFilled = star <= fullStars;

          if (hasHalfStar && star === fullStars + 1) {
            starContent = "☆";
            isFilled = true;
          }

          return (
            <Star key={star} filled={isFilled}>
              {starContent}
            </Star>
          );
        })}
        <Text variant="body" color="muted">
          ({rating}/5)
        </Text>
      </RatingDisplay>
    );
  };

  return (
    <PreviewContainer>
      <div style={{ marginBottom: theme.spacing.md }}>
        <Text variant="h2" color="primary">
          미리보기
        </Text>
      </div>

      {/* 도서 정보 */}
      <PreviewSection>
        <div style={{ marginBottom: theme.spacing.md }}>
          <Text variant="h3" color="secondary">
            도서 정보
          </Text>
        </div>
        {renderField("제목", data.bookInfo.title)}
        {renderField("출판일", data.bookInfo.publishedDate)}
        {renderField("총 페이지", data.bookInfo.totalPages.toString())}
        {renderField("독서 상태", data.bookInfo.readingStatus)}
        {data.bookInfo.startDate &&
          renderField("시작일", data.bookInfo.startDate)}
        {data.bookInfo.endDate && renderField("종료일", data.bookInfo.endDate)}
      </PreviewSection>

      {/* 별점 및 추천 */}
      <PreviewSection>
        <div style={{ marginBottom: theme.spacing.md }}>
          <Text variant="h3" color="secondary">
            별점 및 추천
          </Text>
        </div>
        <PreviewField>
          <Text
            variant="body"
            color="secondary"
            style={{ marginRight: theme.spacing.sm, display: "inline" }}
          >
            별점:
          </Text>
          {data.ratingInfo.rating > 0 ? (
            renderRating(data.ratingInfo.rating)
          ) : (
            <Text variant="body" color="muted" style={{ fontStyle: "italic" }}>
              평가되지 않음
            </Text>
          )}
        </PreviewField>
        <PreviewField>
          <Text
            variant="body"
            color="secondary"
            style={{ marginRight: theme.spacing.sm, display: "inline" }}
          >
            추천:
          </Text>
          {data.ratingInfo.isRecommended ? (
            <Badge variant="success">추천함</Badge>
          ) : (
            <Badge variant="warning">추천하지 않음</Badge>
          )}
        </PreviewField>
      </PreviewSection>

      {/* 독후감 */}
      <PreviewSection>
        <div style={{ marginBottom: theme.spacing.md }}>
          <Text variant="h3" color="secondary">
            독후감
          </Text>
        </div>
        {renderField("내용", data.reviewInfo.content)}
      </PreviewSection>

      {/* 인용구 */}
      <PreviewSection>
        <div style={{ marginBottom: theme.spacing.md }}>
          <Text variant="h3" color="secondary">
            인용구
          </Text>
        </div>
        {data.quoteInfo.quotes.length > 0 ? (
          data.quoteInfo.quotes.map((quote, index) => (
            <PreviewField key={quote.id}>
              <Text
                variant="body"
                color="secondary"
                style={{ marginRight: theme.spacing.sm, display: "inline" }}
              >
                인용구 {index + 1}:
              </Text>
              <div>
                <div>{quote.content}</div>
                {quote.pageNumber && (
                  <Text
                    variant="body"
                    size="sm"
                    color="muted"
                    style={{ marginTop: theme.spacing.xs }}
                  >
                    페이지: {quote.pageNumber}
                  </Text>
                )}
              </div>
            </PreviewField>
          ))
        ) : (
          <Text variant="body" color="muted" style={{ fontStyle: "italic" }}>
            인용구가 없습니다
          </Text>
        )}
      </PreviewSection>

      {/* 공개 설정 */}
      <PreviewSection>
        <div style={{ marginBottom: theme.spacing.md }}>
          <Text variant="h3" color="secondary">
            공개 설정
          </Text>
        </div>
        <PreviewField>
          <Text
            variant="body"
            color="secondary"
            style={{ marginRight: theme.spacing.sm, display: "inline" }}
          >
            공개 여부:
          </Text>
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
