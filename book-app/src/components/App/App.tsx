import {Route, Routes} from "react-router-dom";
import { useQuery } from 'react-query'
import {getAll, search, update} from "../../services/BooksAPI.ts"
import '../../assets/styles/css/App.css'
import { Book } from '../../models/services/Book.ts';
import ListBooks from "../ListBooks/ListBooks.tsx";
import {BookShelves} from "../../common/constants.ts";
import SearchBook from "../SearchBook/SearchBook.tsx";
import {useEffect, useState} from "react";
import { debounce } from 'throttle-debounce';

function App() {
    const {data: books}: { data: Book[] | undefined } = useQuery("books",getAll, {
        refetchInterval: 1
    });

    const [booksState, setBooksState] = useState<Book[]>([])
    const [searchedBook, setSearchedBook] = useState<Book[]>([])

    useEffect(() => {
        setBooksState(books ?? []);
    }, [books]);

    const handleUpdate = async (book: Book, shelf: string) => {
        await update(book, shelf);
    }

    const handleSearchBook = debounce(300, (query: string) => {
        if (query.length > 0) {
            search(query).then(books => {
                setSearchedBook(books)
            }).catch(() => setSearchedBook([]))
        } else {
            setSearchedBook([])
        }
    })

    const handleResetSearch = () => {
        setSearchedBook([])
    }

    return (

        <div className="app">
            <Routes>
                <Route path={"/"} element={<ListBooks books={booksState} shelves={BookShelves} handleUpdate={(book: Book, shelf: string) => handleUpdate(book, shelf)} />} />
                <Route path={"search"} element={<SearchBook searchedBook={searchedBook} books={booksState} handleSearch={handleSearchBook} handleUpdate={(book: Book, shelf: string) => handleUpdate(book, shelf)} handleResetSearch={() => handleResetSearch()} />} />
            </Routes>
        </div>
    );
}

export default App
