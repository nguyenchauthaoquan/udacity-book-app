// import {  useState } from 'react'
import {Route, Routes} from "react-router-dom";
import { useQuery } from 'react-query'

import {getAll, get} from "../../services/BooksAPI.ts"
import '../../assets/styles/css/App.css'
import { Book } from '../../models/services/Book.ts';
import ListBooks from "../ListBooks/ListBooks.tsx";
import {BookShelves} from "../../common/constants.ts";

function App() {
    const books: Book[]  = useQuery("books", getAll).data ?? [];
    const { data: book }: { data: Book | undefined } = useQuery(["book", "nggnmAEACAAJ"], () => get("nggnmAEACAAJ"));

    console.log(books)
    console.log(book)

    return (

        <div className="app">
            <Routes>
                <Route path={"/"} element={<ListBooks books={books} shelves={BookShelves} />} />
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
