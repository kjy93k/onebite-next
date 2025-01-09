"use server";

import { revalidatePath, revalidateTag } from "next/cache";

const createReviewAction = async (formData: FormData) => {
  const bookId = formData.get("bookId")?.toString();
  const content = formData.get("content")?.toString();
  const author = formData.get("author")?.toString();

  if (!bookId || !content || !author) return;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
      {
        method: "POST",
        body: JSON.stringify({ bookId, content, author }),
      }
    );
    console.log(res.status);

    // 1. 특정 주소의 해당하는 페이지만 재검증
    // 페이지 내 모든 캐시를 무효화 함
    // 데이터 캐시, 풀라우트캐시도 무효화(PURGE)되고 데이터캐시와 달리 풀라우트 캐시는 업데이트되지 않음
    // revalidatePath(`/book/${bookId}`);
    // revalidatePath(`/book/${bookId}`, "page");
    // revalidatePath(`/book/${bookId}`, "layout");

    //  2. 특정 경로의 모든 동적 페에지 재검증
    // revalidatePath("/book/[id]", "page");

    // 3. 특정 레이아웃을 갖는 모든 페이지 재검증
    // revalidatePath("/(with-searchbar)", "layout");

    // 4. 모든 데이터를 재검증
    // revalidatePath("/", "layout");

    // 5. 태그 기준, 데이터 캐시 재검증
    revalidateTag(`review-${bookId}`);
  } catch (e) {
    console.error(e);
    return;
  }
};
export default createReviewAction;
