import BookShelf from "../BookShelf/BookShelf.tsx";
import {FC} from "react";
import {ListBooksProps} from "../../models/components/props.ts";
import {Link} from "react-router-dom";
import {Book} from "../../models/services/Book.ts";
import {BookShelves} from "../../common/constants.ts";

const ListBooks: FC<ListBooksProps> = (props: ListBooksProps) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {
                        Object.keys(props.shelves).map((shelf: string) =>
                            <BookShelf key={shelf} books={props.books.filter(book => book.shelf === shelf)} shelf={BookShelves[shelf]} handleUpdate={(book: Book, shelf: string) => props.handleUpdate(book, shelf)} />
                        )
                    }
                </div>
            </div>
            <div className="open-search">
                <Link to={"search"}>Add a book</Link>
            </div>
        </div>
    )
}

export default ListBooks;