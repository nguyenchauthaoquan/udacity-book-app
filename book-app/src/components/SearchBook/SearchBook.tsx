import {Link} from "react-router-dom";
import {SearchBookProps} from "../../models/components/props.ts";
import {FC, useRef} from "react";
import {Book} from "../../models/services/Book.ts";
import BookItem from "../BookItem/BookItem.tsx";

const SearchBook : FC<SearchBookProps> = (props: SearchBookProps) => {
    const searchBook = useRef<any>("");

    const handleChange = () => {
        props.handleSearch(searchBook.current.value);
    }

    const searchedBooksResult: Book[] = (props.searchedBook?.length > 0) ? props.searchedBook.map((searchedItem: Book) => {
        props.books.forEach((book: Book) => {
            if (book.id === searchedItem.id) {
                searchedItem.shelf = book.shelf
            }

            return book;
        })

        return searchedItem;
    }) : []

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to={"/"}>
                    <button className="close-search" onClick={props.handleResetSearch}>Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        ref={searchBook}
                        placeholder="Search by title, author, or ISBN"
                        onChange={() => handleChange()}
                        autoFocus
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        searchedBooksResult.map((book: Book) =>
                            <BookItem key={book.id} book={book} shelf={book.shelf} handleUpdate={(book: Book, shelf: string) => props.handleUpdate(book, shelf)} />
                        )
                    }
                </ol>
            </div>
        </div>
    )
}

export default SearchBook;