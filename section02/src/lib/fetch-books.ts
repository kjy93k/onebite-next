import { BookData } from "@/types";

const fetchBooks = async (q?: string): Promise<BookData[]> => {
  let url = `https://onebite-books-server-six-rho.vercel.app/book`;
  if (q) {
    url += `/search?q=${q}`;
  }

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error();
    }
    return await res.json();
  } catch (e) {
    console.error(e);
    return [];
  }
};

export default fetchBooks;
