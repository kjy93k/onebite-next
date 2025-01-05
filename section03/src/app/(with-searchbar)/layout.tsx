import SearchBar from "@/component/searchbar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <SearchBar />
      {children}
    </div>
  );
};
export default Layout;
