import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
const Page = () => {
  const router = useRouter();
  const { q } = router.query;
  return <>Search {q}</>;
};

export default Page;

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
