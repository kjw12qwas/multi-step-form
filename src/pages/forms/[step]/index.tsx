"use client";

import { useRouter } from "next/router";
import { renderStepComponent } from "@/utils/renderStepComponent";
import { useEffect, useState } from "react";
import { FormPreview } from "@/components/preview/FormPreview";
import { useFormData } from "@/contexts/FormDataContext";
import { Text } from "@/components/text";
import {
  SplitLayout,
  FormSection,
  PreviewSection,
  LayoutHeader,
  StepIndicator,
  StepDot,
  StepLine,
  SectionTitle,
  ProgressInfo,
} from "@/styles/stepPageStyles";
import { LoadingSpinner } from "@/components/loading";

export default function StepPage() {
  const router = useRouter();
  const { step } = router.query;
  const [StepComponent, setStepComponent] =
    useState<React.ComponentType | null>(null);
  const { previewData, isLoaded, updateFormData } = useFormData();
  const [isMobile, setIsMobile] = useState(false);
  const [isRouterReady, setIsRouterReady] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      setIsRouterReady(true);
    }
  }, [router.isReady]);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkWindowSize();

    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  useEffect(() => {
    if (isRouterReady && step) {
      const numericStep = Number(step);
      if (!isNaN(numericStep) && numericStep >= 1 && numericStep <= 5) {
        const component = renderStepComponent(numericStep);
        setStepComponent(() => component);

        updateFormData({ step: numericStep });
      } else {
        router.replace("/404");
      }
    }
  }, [step, router, updateFormData, isRouterReady]);

  if (!isRouterReady || !StepComponent || !isLoaded) {
    return <LoadingSpinner />;
  }

  const currentStep = Number(step);

  return (
    <SplitLayout>
      <FormSection>
        <LayoutHeader>
          <SectionTitle>폼 작성</SectionTitle>
          <StepIndicator>
            {[1, 2, 3, 4, 5].map((stepNumber, index) => (
              <div
                key={stepNumber}
                style={{ display: "flex", alignItems: "center" }}
              >
                <StepDot
                  $active={stepNumber === currentStep}
                  $completed={stepNumber < currentStep}
                >
                  {stepNumber < currentStep ? "✓" : stepNumber}
                </StepDot>
                {index < 4 && (
                  <StepLine $completed={stepNumber < currentStep} />
                )}
              </div>
            ))}
          </StepIndicator>
        </LayoutHeader>
        <StepComponent />
      </FormSection>

      {!isMobile && (
        <PreviewSection>
          <LayoutHeader>
            <SectionTitle>실시간 미리보기</SectionTitle>
          </LayoutHeader>

          <ProgressInfo>
            <Text variant="body" size="sm" color="muted">
              📝 현재 진행 상황: <strong>{currentStep}/5 단계</strong>
            </Text>
            <Text
              variant="body"
              size="sm"
              color="muted"
              style={{ marginTop: "0.5rem" }}
            >
              {currentStep === 1 && "📚 도서 정보 입력 중"}
              {currentStep === 2 && "💬 인용구 입력 중"}
              {currentStep === 3 && "⭐ 별점 평가 중"}
              {currentStep === 4 && "📖 독후감 작성 중"}
              {currentStep === 5 && "🔒 공개 설정 중"}
            </Text>
          </ProgressInfo>

          <FormPreview data={previewData} />
        </PreviewSection>
      )}
    </SplitLayout>
  );
}
