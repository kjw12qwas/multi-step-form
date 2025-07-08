"use client";

import { useState } from "react";
import {
  FormsContainer,
  FormsGrid,
  FormCard,
  PageTitle,
  CardTitle,
  FormButton,
} from "@/styles/formsSelectionStyles";
import { useRouter } from "next/router";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Forms() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleStartForm = async () => {
    setIsLoading(true);
    await router.push("/forms/1");
  };

  const handleContinueForm = async () => {
    setIsLoading(true);
    await router.push("/forms/1");
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <FormsContainer>
      <PageTitle>Multi Step Form</PageTitle>
      <FormsGrid>
        <FormCard>
          <CardTitle>작성하기</CardTitle>
          <FormButton onClick={handleStartForm}>시작하기</FormButton>
        </FormCard>

        <FormCard>
          <CardTitle>기존에 하던 작업 이어서 하기</CardTitle>
          <FormButton onClick={handleContinueForm}>이어서 하기</FormButton>
        </FormCard>
      </FormsGrid>
    </FormsContainer>
  );
}
