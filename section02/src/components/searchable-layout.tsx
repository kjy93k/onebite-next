import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import style from "./searchable-layout.module.css";
import Head from "next/head";
const SearchableLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const { q } = router.query as { q: string };

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSubmit();
  };

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  return (
    <>
      <Head>
        <title>한입북스 - 검색결과</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="힌입북스 - 검색결과" />
        <meta
          property="og:description"
          content="한입북스에 등록된 도서들을 만나보세요"
        />
      </Head>{" "}
      <div>
        <div className={style.searchbar_container}>
          <input
            type="text"
            value={search}
            onKeyDown={onKeyDown}
            onChange={onChangeSearch}
            placeholder="검색어를 입력하세요..."
          />
          <button onClick={onSubmit}>검색</button>
        </div>
        {children}
      </div>
    </>
  );
};
export default SearchableLayout;
