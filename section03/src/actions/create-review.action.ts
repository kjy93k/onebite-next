"use server";

import { revalidatePath } from "next/cache";

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
    // 페이지 내 모든 캐시를 무효화 함
    // 데이터 캐시, 풀라우트캐시도 무효화(PURGE)되고 데이터캐시와 달리 풀라우트 캐시는 업데이트되지 않음
    revalidatePath(`/book/${bookId}`);
  } catch (e) {
    console.error(e);
    return;
  }
};
export default createReviewAction;
