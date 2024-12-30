import { useRouter } from "next/router";
const Page = () => {
  const router = useRouter();
  const { q } = router.query;
  return <>Search {q}</>;
};

export default Page;
