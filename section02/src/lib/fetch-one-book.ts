import { BookData } from "@/types";

const fetchOneBook = async (id: number): Promise<BookData | null> => {
  const url = `http://localhost:12345/book/${id}`;
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
