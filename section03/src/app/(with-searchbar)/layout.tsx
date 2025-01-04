import { ReactNode } from "react";
import SearchBar from "./searchbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};
export default Layout;
