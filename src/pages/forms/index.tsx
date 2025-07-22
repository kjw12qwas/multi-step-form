"use client";

import React, { useState } from "react";
import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { Card } from "@/components/card/Card";
import { useRouter } from "next/router";
import { LoadingSpinner } from "@/components/loading/LoadingSpinner";
import { useFormData } from "@/contexts/FormDataContext";
import { FormData } from "@/types/form";
import { FormsContainer, FormsGrid } from "@/styles/formsSelectionStyles";
import { LOCAL_STORAGE_KEY } from "@/constants/localStorage";

const STEP_DESCRIPTIONS = {
  1: "도서 정보 입력",
  2: "별점 평가",
  3: "독후감 작성",
  4: "인용구 입력",
  5: "공개 설정",
} as const;

// 첫 진행 화면이며 저장된 데이터가 있을 경우 이어서 하기 버튼을 클릭하면 저장된 데이터를 불러오고 없을 경우 시작하기 버튼을 클릭하면 첫 진행 화면으로 이동합니다.
export default function Forms() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { resetFormData } = useFormData();
  const [savedData, setSavedData] = useState<FormData | null>(null);

  // localStorage에서 데이터 로드
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (data) {
        try {
          const parsedData = JSON.parse(data);
          setSavedData(parsedData);
        } catch (error) {
          console.error("Error parsing saved data:", error);
        }
      }
    }
  }, []);

  const handleStartForm = () => {
    setIsLoading(true);
    resetFormData();
    router.push("/forms/1");
  };

  const handleContinueForm = () => {
    setIsLoading(true);
    router.push("/forms/1");
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const getStepDescription = (step: number) => {
    return (
      STEP_DESCRIPTIONS[step as keyof typeof STEP_DESCRIPTIONS] || "시작하기"
    );
  };

  const hasProgress = savedData && savedData.step > 0;

  return (
    <FormsContainer>
      <Text variant="h1" color="primary" align="center">
        Multi Step Form
      </Text>

      {hasProgress && (
        <Card
          variant="filled"
          size="md"
          style={{
            maxWidth: "600px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <Text variant="h3" color="primary" style={{ marginBottom: "0.5rem" }}>
            📚 진행 중인 작업
          </Text>
          <Text
            variant="body"
            color="secondary"
            style={{ marginBottom: "1rem" }}
          >
            현재 <strong>{savedData.step}단계</strong>에서{" "}
            <strong>{getStepDescription(savedData.step)}</strong> 중입니다
          </Text>
          <Text variant="body" size="sm" color="muted">
            이어서 하기를 클릭하면 저장된 정보를 불러와 계속 진행할 수 있습니다
          </Text>
        </Card>
      )}

      <FormsGrid
        style={{
          gridTemplateColumns: hasProgress ? "1fr 1fr" : "1fr",
          justifyContent: hasProgress ? "stretch" : "center",
          maxWidth: hasProgress ? "800px" : "400px",
        }}
      >
        <Card
          variant="outlined"
          size="lg"
          onClick={handleStartForm}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "200px",
            gap: "1rem",
          }}
        >
          <Text variant="h2" color="secondary" align="center">
            작성하기
          </Text>
          <Button variant="primary" onClick={handleStartForm}>
            시작하기
          </Button>
        </Card>

        {hasProgress && (
          <Card
            variant="outlined"
            size="lg"
            onClick={handleContinueForm}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "200px",
              gap: "1rem",
            }}
          >
            <Text variant="h2" color="secondary" align="center">
              기존에 하던 작업 이어서 하기
            </Text>
            <Button variant="primary" onClick={handleContinueForm}>
              이어서 하기
            </Button>
          </Card>
        )}
      </FormsGrid>
    </FormsContainer>
  );
}
