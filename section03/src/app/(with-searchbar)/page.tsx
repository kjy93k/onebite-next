import BookItem from "@/components/book-item";
import style from "./page.module.css";
import { BookData } from "@/types";
import delay from "@/util/delay";
import { Suspense } from "react";
import BookListSkeleton from "@/components/skeleton/book-list-skeleton";

export const dynamic = "force-dynamic";
// 권장하지 않음
// 특정 페이지의 유형을 강제로 Static, Dynamic 페이지로 설정
// 1. auto: 기본값, 아무것도 강제하지 않음
// 2. force-dynamic: 페이지를 강제로 Dynamic 페이지로 설정
// 3. force-static: 페이지를 강제로 Static 페이지로 설정
// 4. error: 페이지를 강제로 static 페이지로 설정 (static으로 설정하면 안되는 이유가 있다면 빌드 오류)

const AllBooks = async () => {
  await delay(3000);
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`, {
    cache: "force-cache",
  });
  if (!res.ok) {
    return <div>오류가 발생했습니다</div>;
  }
  const allBooks: BookData[] = await res.json();
  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};
const RecoBooks = async () => {
  await delay(1500);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
    { next: { revalidate: 5 } }
  );
  if (!res.ok) {
    return <div>오류가 발생했습니다</div>;
  }
  const recoBooks: BookData[] = await res.json();
  return (
    <div>
      {recoBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>

        <Suspense
          fallback={
            <>
              <BookListSkeleton count={3}></BookListSkeleton>
            </>
          }
        >
          <RecoBooks />
        </Suspense>
      </section>

      <section>
        <h3>등록된 모든 도서</h3>
        <Suspense
          fallback={
            <>
              <BookListSkeleton count={3}></BookListSkeleton>
            </>
          }
        >
          <AllBooks />
        </Suspense>
      </section>
    </div>
  );
}
