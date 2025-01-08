import createReviewAction from "@/actions/create-review.action";
import style from "./review-editor.module.css";

const ReviewEditor = ({ bookId }: { bookId: string }) => {
  return (
    <section>
      <form className={style.form_container} action={createReviewAction}>
        <input name="bookId" value={bookId} hidden readOnly required />
        <textarea name="content" placeholder="리뷰를 입력해주세요" required />
        <div className={style.submit_container}>
          <input name="author" placeholder="작성자" required />
          <button type="submit">작성하기</button>
        </div>
      </form>
    </section>
  );
};

export default ReviewEditor;
