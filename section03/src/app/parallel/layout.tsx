import Link from "next/link";
import { ReactNode } from "react";

const layout = ({
  children,
  sidebar,
  feed,
}: {
  children: ReactNode;
  sidebar: ReactNode;
  feed: ReactNode;
}) => {
  return (
    <div>
      <div>
        <Link href={"/parallel"}>/parallel</Link>
        &nbsp;
        {/* 슬롯의 페이지로 이동 후 새로고침 시 404페이지가 뜸 */}
        <Link href={"/parallel/setting"}>/parallel/setting</Link>
      </div>
      {/* @를 선행해서 붙이면 슬롯이 됨, children도 @children처럼 사용 가능 */}
      {sidebar}
      {feed}
      {children}
    </div>
  );
};

export default layout;
