import ClientComponent from "@/component/client-component";
const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  const { q } = await searchParams;
  return (
    <div>
      Search 페이지{q}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
};
export default Page;
