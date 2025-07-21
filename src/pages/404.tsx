import Link from "next/link";
import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { NotFoundContainer, NotFoundContent } from "@/styles/notFoundStyles";

// 사용자가 없는 페이지 또는 에러가 발생 했을 때 대응 하기 위한 page 입니다.
export default function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <Text variant="h1" color="primary" size="3xl">
          404 - Page Not Found
        </Text>
        <Text variant="body" color="muted" align="center">
          존재하지 않는 경로입니다. 다시 확인해주세요.
        </Text>
        <Link href="/">
          <Button variant="primary" size="lg">
            메인 페이지로 이동
          </Button>
        </Link>
      </NotFoundContent>
    </NotFoundContainer>
  );
}
