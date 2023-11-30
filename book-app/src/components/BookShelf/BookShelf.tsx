import Book from "../Book/Book.tsx";
import {BookShelfProps} from "../../models/components/props.ts";
import {FC} from "react";

const BookShelf: FC<BookShelfProps> = (props: BookShelfProps) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelf}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        props.books?.map(book =>
                            <li key={book.id}>
                                <Book book={book} shelf={props.shelf} />
                            </li>

                        )
                    }
                </ol>
            </div>
        </div>
    )
}
export default BookShelf;