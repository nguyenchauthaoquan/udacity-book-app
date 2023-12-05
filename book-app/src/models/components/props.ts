import { ReactNode } from "react";
import {Book} from "../services/Book.ts";
import {debounce} from "throttle-debounce";

export type ErrorBoundaryProps = {
    children?: ReactNode;
}

export type ListBooksProps = {
    books: Book[];
    shelves: object;
    handleUpdate: (book: Book, shelf: string) => void;
}

export type BookShelfProps = {
    shelf: string;
    books: Book[];
    handleUpdate: (book: Book, shelf: string) => void;
}

export type BookProps = {
    book: Book;
    shelf: string;
    handleUpdate: (book: Book, shelf: string) => void;
}

export type BookShelfChangerProps = {
    book: Book;
    shelf: string;
    handleUpdate: (book: Book, shelf: string) => void;
}

export type SearchBookProps = {
    searchedBook: Book[];
    books: Book[];
    handleResetSearch: () => void;
    handleSearch: debounce<(query: string) => void>;
    handleUpdate: (book: Book, shelf: string) => void;
}