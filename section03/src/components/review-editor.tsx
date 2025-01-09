"use client";

import createReviewAction from "@/actions/create-review.action";
import style from "./review-editor.module.css";
import { useActionState, useEffect } from "react";

const ReviewEditor = ({ bookId }: { bookId: string }) => {
  const [state, formAction, isPending] = useActionState(
    createReviewAction,
    null
  );

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <section>
      <form className={style.form_container} action={formAction}>
        <input name="bookId" value={bookId} hidden readOnly required />
        <textarea
          name="content"
          placeholder="리뷰를 입력해주세요"
          required
          disabled={isPending}
        />
        <div className={style.submit_container}>
          <input
            name="author"
            placeholder="작성자"
            required
            disabled={isPending}
          />
          <button type="submit" disabled={isPending}>
            {isPending ? "..." : "작성하기"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ReviewEditor;
