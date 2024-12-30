import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const onClickButton = () => {
    // router.replace("/test");
    router.push("/test");
  };

  useEffect(() => {
    router.prefetch("/test");
  }, []);
  return (
    <>
      <Link href={"/"}>Index</Link>
      &nbsp;
      <Link href={"/search"} prefetch={false}>
        Search
      </Link>
      &nbsp;
      <Link href={"/book/1"}>Book 1</Link>
      <div>
        <button onClick={onClickButton}>/test 페이지로 이동</button>
      </div>
      <Component {...pageProps} />
    </>
  );
}
