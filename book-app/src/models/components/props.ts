import { ReactNode } from "react";
import {Book} from "../services/Book.ts";

export type ErrorBoundaryProps = {
    children?: ReactNode;
}

export type ListBooksProps = {
    books: Book[];
    shelves: object;
    //handleMoveBook: (book: Book, shelf: string) => void;
}

export type BookShelfProps = {
    shelf: string;
    books: Book[];
    //handleMoveBook: (book: Book, shelf: string) => void;
}

export type BookProps = {
    book: Book;
    shelf: string;
    //handleMoveBook: (book: Book, shelf: string) => void;
}