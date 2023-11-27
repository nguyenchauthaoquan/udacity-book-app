import axios from "axios";
import { Book } from "./models/services/Book";

const api = "https://reactnd-books-api.udacity.com";

let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};

export const get = async (bookId: any) =>
  axios.get(`${api}/books/${bookId}`, { headers })
    .then((res) => res.data)
    .then((data) => data.book);

export const getAll = async (): Promise<Book[]> => {
    let books: Book[] = []
    await axios.get(`${api}/books`, { headers })
                      .then((res) => books = res.data.books);

    return books
}


export const update = async (book: any, shelf: any) =>
  await axios.put(`${api}/books/${book.id}`, {
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ shelf }),
  }).then((res) => res.data);

export const search = (query: any, maxResults: any) =>
  fetch(`${api}/search`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, maxResults }),
  })
    .then((res) => res.json())
    .then((data) => data.books);