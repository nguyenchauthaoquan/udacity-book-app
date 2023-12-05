import BookShelfChanger from "../BookShelfChanger/BookShelfChanger.tsx";
import {BookProps} from "../../models/components/props.ts";
import {FC} from "react";
import {Book} from "../../models/services/Book.ts";

const BookItem: FC<BookProps> = (props: BookProps) => {
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${
                        props.book.imageLinks
                            ? props.book.imageLinks.thumbnail
                            : 'icons/book-placeholder.svg'
                    })`}}></div>
                <BookShelfChanger book={props.book} shelf={props.shelf} handleUpdate={(book: Book, shelf: string) => props.handleUpdate(book, shelf)} />
            </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors">{props.book.authors ? props.book.authors.join(", ") : "Unknown Author"}</div>
        </div>
    )
}

export default BookItem