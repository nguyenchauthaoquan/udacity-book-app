import {BookShelfChangerProps} from "../../models/components/props.ts";
import {ChangeEvent, FC, useState} from "react";

const BookShelfChanger: FC<BookShelfChangerProps> = (props: BookShelfChangerProps) => {
    const [shelfValue, setShelfValue] = useState<string>(props.shelf);

    const handleChangeShelf = (event: ChangeEvent<HTMLSelectElement>) => {
        setShelfValue(event.target.value);

        console.log(shelfValue)

        props.handleUpdate(props.book, shelfValue)
    }

    return (
        <div className="book-shelf-changer">
            <select value={shelfValue} onChange={(event: ChangeEvent<HTMLSelectElement>) => handleChangeShelf(event)}>
                <option value="move" disabled>
                    Move to...
                </option>
                <option value="currentlyReading">
                    Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

export default BookShelfChanger;