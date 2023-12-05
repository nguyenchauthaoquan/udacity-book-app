function SearchBook() {
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <button
                    className="close-search"
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
    )
}

export default SearchBook;