import ClientComponent from "@/component/client-component";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div>
      book/[id] 페이지: {id}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
};
export default Page;
