import BookItem from "../BookItem/BookItem.tsx";
import {BookShelfProps} from "../../models/components/props.ts";
import {FC} from "react";
import {Book} from "../../models/services/Book.ts";

const BookShelf: FC<BookShelfProps> = (props: BookShelfProps) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelf}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        props.books?.map(book =>
                            <li key={book.id}>
                                <BookItem book={book} shelf={props.shelf} handleUpdate={(book: Book, shelf: string) => props.handleUpdate(book, shelf)} />
                            </li>

                        )
                    }
                </ol>
            </div>
        </div>
    )
}
export default BookShelf;