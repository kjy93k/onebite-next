"use client";

import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();
  useEffect(() => {
    console.error(error.message);
  }, [error]);
  return (
    <div>
      <h3>검색 과정에서 오류가 발생했습니다</h3>
      {/* reset()은 서버가 복구되어도 클라이언트 컴포넌트 내부의 오류만 복구됨 */}
      {/* <button onClick={() => reset()}>다시 시도</button> */}
      {/* window.location.reload() 또한 좋은 방법은 아님, 저장된 것이 날라갈 수 있음 */}
      {/* <button onClick={() => window.location.reload()}>다시 시도</button> */}
      <button
        onClick={() => {
          startTransition(() => {
            //콜백함수 안에 UI 변경 작업을 일괄적으로 처리하도록 함
            router.refresh(); // 현재 페이지에 필요한 서버 컴포넌트들을 다시 불러오도록 요청함
            reset(); // 에러 상태를 초기화, 컴포넌트를 다시 렌더링
          });
        }}
      >
        다시 시도
      </button>
    </div>
  );
};
export default Error;
