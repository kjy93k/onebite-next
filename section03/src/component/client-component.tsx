"use client";
import { ReactNode } from "react";
// import ServerComponent from "./server-component";

const ClientComponent = ({ children }: { children: ReactNode }) => {
  console.log("client component");

  return (
    <div>
      {/* 클라이언트 컴포넌트에 임포트된 서버 컴포넌트는 클라이언트 컴포넌트로 변환됨, */}
      {/* 이런 경우는 children props 받는 것이 좋음  */}
      {/* <ServerComponent /> */}
      {children}
    </div>
  );
};

export default ClientComponent;
