import { BookData } from "@/types";

const fetchOneBook = async (id: number): Promise<BookData | null> => {
  const url = `https://onebite-books-server-six-rho.vercel.app/book/${id}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error();
    return await res.json();
  } catch (e) {
    console.log(e);
    return null;
  }
};
export default fetchOneBook;
