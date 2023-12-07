import {BookShelfChangerProps} from "../../models/components/props.ts";
import {
    FC,
    useRef,
} from "react";
import {BookShelves} from "../../common/constants.ts";

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
                {
                    Object.entries(BookShelves).map(([key, value] : [key: string, value: string]) =>
                        <option key={key}  value={key}>{value}</option>
                    )
                }
                <option value="none">None</option>
            </select>
        </div>
    )
}

export default BookShelfChanger;