import Link from "next/link";
import {
  NotFoundContainer,
  NotFoundTitle,
  NotFoundMessage,
  HomeButton,
} from "@/styles/notFoundStyles";

// 사용자가 없는 페이지 또는 에러가 발생 했을 때 대응 하기 위한 page 입니다.
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
