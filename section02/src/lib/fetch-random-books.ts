import { BookData } from "@/types";

const fetchRandomBooks = async (): Promise<BookData[]> => {
  const url = `http://localhost:12345/book/random`;

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

export default fetchRandomBooks;
