import BookItem from "@/components/book-item";
import BookListSkeleton from "@/components/skeleton/book-list-skeleton";
import { BookData } from "@/types";
import delay from "@/util/delay";
import { Suspense } from "react";

// export const dynamic = "force-static";
// 어떠한 검색어를 입력해도 검색 결과가 비어있게 됨
// export const dynamic = "error";
// build 오류

export const SearchResult = async ({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
  }>;
}) => {
  const { q } = await searchParams;
  await delay(1500);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`,
    { cache: "force-cache" }
  );
  if (!res.ok) {
    return <div>오류가 발생했습니다.</div>;
  }
  const books: BookData[] = await res.json();
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
  }>;
}) {
  const { q } = await searchParams;

  return (
    <Suspense
      key={q || ""}
      fallback={<BookListSkeleton count={3}></BookListSkeleton>}
    >
      <SearchResult searchParams={searchParams} />
    </Suspense>
  );
}
