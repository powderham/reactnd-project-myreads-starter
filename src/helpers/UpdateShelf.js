import { get, update } from "../BooksAPI";

export const updateBook = (id, value) => {
  const book = get(id).then(book =>
    update(book, value)
  );
};
