import {Route, Routes} from "react-router-dom";
import {getAll, search, update} from "../../services/BooksAPI.ts"
import '../../assets/styles/css/App.css'
import { Book } from '../../models/services/Book.ts';
import ListBooks from "../ListBooks/ListBooks.tsx";
import {BookShelves} from "../../common/constants.ts";
import SearchBook from "../SearchBook/SearchBook.tsx";
import {useEffect, useState} from "react";
import { debounce } from 'throttle-debounce';

function App() {
    const [booksList, setBooksList] = useState<Book[]>([]);
    const [searchedBook, setSearchedBook] = useState<Book[]>([])

    const handleGetAllBooks = async () => {
        const books = await getAll();

        setBooksList(books);
    }

    const handleUpdate = async (book: Book, shelf: string) => {
        await update(book, shelf);

        const books = await getAll();

        if (shelf !== "none") {
            setBooksList(books);
        } else {
            setBooksList(prevState => prevState.filter(b => b.id !== book.id))
        }
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

    useEffect(() => {
        handleGetAllBooks().then();
    }, []);

    return (

        <div className="app">
            <Routes>
                <Route path={"/"} element={<ListBooks books={booksList ?? []} shelves={BookShelves} handleUpdate={(book: Book, shelf: string) => handleUpdate(book, shelf)} />} />
                <Route path={"search"} element={<SearchBook searchedBook={searchedBook} books={booksList ?? []} handleSearch={handleSearchBook} handleUpdate={(book: Book, shelf: string) => handleUpdate(book, shelf)} handleResetSearch={() => handleResetSearch()} />} />
            </Routes>
        </div>
    );
}

export default App
