import { notFound } from "next/navigation";
import style from "./page.module.css";

// export const dynamicParams = false; => 없는 파라미터는 404
export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};

const BookDetail = async ({ bookId }: { bookId: string }) => {
  // const { id } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`
  );
  if (!res.ok) {
    if (res.status === 404) {
      notFound();
    }
    return <div>오류가 발생했습니다.</div>;
  }
  const book = await res.json();

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <section>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </section>
  );
};

const ReviewEditor = () => {
  const createReviewAction = async (formData: FormData) => {
    "use server";

    const content = formData.get("content")?.toString();
    const author = formData.get("author")?.toString();
  };
  return (
    <section>
      <form action={createReviewAction}>
        <input name="content" placeholder="리뷰를 입력해주세요" required />
        <input name="author" placeholder="작성자" required />
        <button type="submit">작성하기</button>
      </form>
    </section>
  );
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className={style.container}>
      <BookDetail bookId={id} />
      <ReviewEditor />
    </div>
  );
}
