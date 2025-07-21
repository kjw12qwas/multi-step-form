import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { LoadingSpinner } from "@/components/loading/LoadingSpinner";

export default function Home() {
  const router = useRouter();
  const [isLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/forms");
    }, 1000);

    return () => clearTimeout(timer);
  }, [router]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return null;
}
