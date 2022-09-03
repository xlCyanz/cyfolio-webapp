import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

const IndexPage: NextPage = () => {
  const router = useRouter();

  React.useEffect(() => {
    const { pathname } = router;

    if (pathname === "/") {
      router.push("/home");
    }
  }, [router]);

  return null;
};

export default IndexPage;
