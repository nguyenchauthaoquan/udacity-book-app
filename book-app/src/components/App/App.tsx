// import {  useState } from 'react'
import {Route, Routes} from "react-router-dom";
import { useQuery } from 'react-query'

import {getAll, update} from "../../services/BooksAPI.ts"
import '../../assets/styles/css/App.css'
import { Book } from '../../models/services/Book.ts';
import ListBooks from "../ListBooks/ListBooks.tsx";
import {BookShelves} from "../../common/constants.ts";
import SearchBook from "../SearchBook/SearchBook.tsx";

function App() {
    let books  = useQuery("books", getAll).data ?? [];

    const handleUpdate = async (book: Book, shelf: string) => {
        await update(book, shelf);

        books = books.filter(b => b.id !== book.id).concat(book)
    }

    console.log(books)

    return (

        <div className="app">
            <Routes>
                <Route path={"/"} element={<ListBooks books={books} shelves={BookShelves} handleUpdate={handleUpdate} />} />
                <Route path={"search"} element={<SearchBook />} />
            </Routes>
            {
                /*
                showSearchPage ? (
                    <div className="search-books">
                        <div className="search-books-bar">
                            <button
                                className="close-search"
                                onClick={() => setShowSearchPage(!showSearchPage)}
                            >
                                Close
                            </button>
                            <div className="search-books-input-wrapper">
                                <input
                                    type="text"
                                    placeholder="Search by title, author, or ISBN"
                                />
                            </div>
                        </div>
                        <div className="search-books-results">
                            <ol className="books-grid">
                                <li>a</li>
                                <li>b</li>
                            </ol>
                        </div>
                    </div>
                ) : (
                    <>
                        <ListBooks books={books} shelves={BookShelves} />
                        <div className="open-search">
                            <button onClick={() => setShowSearchPage(!showSearchPage)}>Add a book</button>
                        </div>
                    </>
                )
                
                 */
            }
            
        </div>
    );
}

export default App
