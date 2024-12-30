import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { id } = router.query;
  return <>Book {id}</>;
};

export default Page;
