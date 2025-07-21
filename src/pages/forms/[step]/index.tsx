import { useRouter } from "next/router";
import { renderStepComponent } from "../_components/renderStepComponent";
import { useEffect, useState } from "react";
import NotFound from "../../404";

export default function StepPage() {
  const router = useRouter();
  const { step } = router.query;
  const [StepComponent, setStepComponent] =
    useState<React.ComponentType | null>(null);

  useEffect(() => {
    if (step) {
      const numericStep = Number(step);
      if (!isNaN(numericStep) && numericStep >= 1 && numericStep <= 5) {
        const component = renderStepComponent(numericStep);
        setStepComponent(() => component);
      } else {
        router.replace("/404");
      }
    }
  }, [step, router]);

  if (!StepComponent) {
    return <NotFound />;
  }

  return <StepComponent />;
}
