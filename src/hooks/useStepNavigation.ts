import { useRouter } from "next/router";

const MAX_STEP = 5;
const MIN_STEP = 1;
const DEFAULT_STEP = 1;

// 각 단계에 대한 네비게이션 기능을 제공하는 훅 입니다.
export const useStepNavigation = () => {
  const router = useRouter();
  const { step } = router.query;

  const handleNext = () => {
    if (step && Number(step) >= MIN_STEP && Number(step) < MAX_STEP) {
      router.push(`/forms/${Number(step) + 1}`);
    } else {
      router.push(`/forms/${DEFAULT_STEP}`);
    }
  };

  const handlePrev = () => {
    if (step && Number(step) > MIN_STEP && Number(step) <= MAX_STEP) {
      router.push(`/forms/${Number(step) - 1}`);
    } else {
      router.push(`/forms/${DEFAULT_STEP}`);
    }
  };

  const currentStep = step ? Number(step) : MIN_STEP;
  const isFirstStep = currentStep === MIN_STEP;
  const isLastStep = currentStep === MAX_STEP;

  return {
    currentStep,
    isFirstStep,
    isLastStep,
    handleNext,
    handlePrev,
  };
}; 