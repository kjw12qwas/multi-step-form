import { useRouter } from "next/router";

export const useStepNavigation = () => {
  const router = useRouter();
  const { step } = router.query;

  const handleNext = () => {
    if (step && Number(step) > 0 && Number(step) < 5) {
      router.push(`/forms/${Number(step) + 1}`);
    } else {
      router.push("/forms/1");
    }
  };

  const handlePrev = () => {
    if (step && Number(step) > 1 && Number(step) <= 5) {
      router.push(`/forms/${Number(step) - 1}`);
    } else {
      router.push("/forms/1");
    }
  };

  const currentStep = step ? Number(step) : 1;
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === 5;

  return {
    currentStep,
    isFirstStep,
    isLastStep,
    handleNext,
    handlePrev,
  };
}; 