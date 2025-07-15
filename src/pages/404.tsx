import Link from "next/link";
import {
  NotFoundContainer,
  NotFoundTitle,
  NotFoundMessage,
  HomeButton,
} from "@/styles/notFoundStyles";

export default function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404 - Page Not Found</NotFoundTitle>
      <NotFoundMessage>
        존재하지 않는 경로입니다. 다시 확인해주세요.
      </NotFoundMessage>
      <Link href="/">
        <HomeButton>메인 페이지로 이동</HomeButton>
      </Link>
    </NotFoundContainer>
  );
}
