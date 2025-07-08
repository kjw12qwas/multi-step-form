import {
  LoadingContainer,
  LoadingText,
  Spinner,
} from "@/styles/loadingSpinnerStyles";

export default function LoadingSpinner() {
  return (
    <LoadingContainer>
      <Spinner />
      <LoadingText>로딩 중...</LoadingText>
    </LoadingContainer>
  );
}
