import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";

const IndexPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;

    if (pathname === "/") {
      router.push("/home");
    }
  }, [router]);

  return null;
};

export default IndexPage;
