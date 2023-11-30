import BookShelfChanger from "../BookShelfChanger/BookShelfChanger.tsx";
import {BookProps} from "../../models/components/props.ts";
import {FC} from "react";

const Book: FC<BookProps> = (props: BookProps) => {
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
                <BookShelfChanger />
            </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors">{props.book.authors ? props.book.authors.join(", ") : "Unknown Author"}</div>
        </div>
    )
}

export default Book