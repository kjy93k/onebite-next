import BookItem from "@/components/book-item";
import style from "./page.module.css";
import books from "@/mock/books.json";
import { BookData } from "@/types";

const AllBooks = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`, {
    cache: "no-store",
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
const RecBooks = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
    { next: { revalidate: 5 } }
  );
  if (!res.ok) {
    return <div>오류가 발생했습니다</div>;
  }
  const recBooks: BookData[] = await res.json();
  return (
    <div>
      {recBooks.map((book) => (
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
        <RecBooks />
      </section>

      <section>
        <h3>등록된 모든 도서</h3>
        <AllBooks />
      </section>
    </div>
  );
}
