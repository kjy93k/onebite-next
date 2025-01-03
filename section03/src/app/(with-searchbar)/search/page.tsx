const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  const { q } = await searchParams;
  return <div>Search 페이지{q}</div>;
};
export default Page;
