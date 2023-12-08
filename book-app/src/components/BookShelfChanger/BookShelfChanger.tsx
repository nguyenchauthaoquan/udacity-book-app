import {BookShelfChangerProps} from "../../models/components/props.ts";
import {
    FC,
    useRef,
} from "react";

const BookShelfChanger: FC<BookShelfChangerProps> = (props: BookShelfChangerProps) => {
    const shelfRef = useRef<any>(props.book.shelf)

    const handleChangeShelf = () => {
        props.handleUpdate(props.book, shelfRef?.current.value);
    }


    return (
        <div className="book-shelf-changer">
            <select ref={shelfRef} value={props.book.shelf} onChange={handleChangeShelf}>
                <option value={""} disabled>
                    Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

export default BookShelfChanger;