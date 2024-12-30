import { useRouter } from "next/router";
import books from "@/mock/books.json";
import { BookData } from "@/types";
import style from "./[id].module.css";

const mockData = books[0];

const Page = () => {
  const router = useRouter();
  // const { id } = router.query;
  const {
    id,
    title,
    subTitle,
    description,
    author,
    publisher,
    coverImgUrl,
  }: BookData = mockData;
  return (
    <div className={style.container}>
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
    </div>
  );
};

export default Page;
