"use server";

import { revalidateTag } from "next/cache";

const deleteReviewAction = async (_: any, formData: FormData) => {
  const reviewId = formData.get("reviewId")?.toString();
  const bookId = formData.get("bookId")?.toString();
  if (!reviewId || !bookId)
    return { status: false, error: "식제할 리뷰가 없습니다." };
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/${reviewId}`,
      {
        method: "DELETE",
      }
    );
    if (!res.ok) throw new Error(res.statusText);
    revalidateTag(`review-${bookId}`);

    return { status: true, error: "" };
  } catch (e) {
    return { status: false, error: `리뷰 삭제에 실패했습니다.: ${e}` };
  }
};

export default deleteReviewAction;
