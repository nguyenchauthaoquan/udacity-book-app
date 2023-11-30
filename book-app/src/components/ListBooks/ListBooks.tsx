import BookShelf from "../BookShelf/BookShelf.tsx";
import {FC} from "react";
import {ListBooksProps} from "../../models/components/props.ts";

const ListBooks: FC<ListBooksProps> = (props: ListBooksProps) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {
                        Object.values(props.shelves).map((shelf: string) =>
                            <BookShelf key={shelf} books={props.books} shelf={shelf} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ListBooks;