import { useState } from "react";
import { bookCollectionRef } from "../config/firebase";
import { addDoc } from "firebase/firestore";
import { getBooks } from "../services/booksService";
import { info, error } from "../utils/logger";


function AddBookForm() {
    const [bookTitle, setBookTitle] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [bookReleaseYear, setBookReleaseYear] = useState(0);
    const [bookReleaseMonth, setBookReleaseMonth] = useState("");

    

    const monthAbbreviations = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const addBook = async () => {
        // add to db
        try {
            info("Trying to add book to database...");
            await addDoc(bookCollectionRef, {
                title: bookTitle,
                author: bookAuthor,
                releaseYear: bookReleaseYear,
                releaseMonth: bookReleaseMonth
            });
        } catch (err) {
            error("Error while adding book to database:");
            console.log(err);
        }
        getBooks();
    }
    const handleDateChange = (e) => {
        const monthValue = e.target.value;
        const month = monthAbbreviations[Number(monthValue.split('-')[1])];
        const year = monthValue.split('-')[0];
        setBookReleaseMonth(month);
        setBookReleaseYear(Number(year));
        console.log('Selected month:', bookReleaseMonth); // For debugging or further use
        console.log('Selected year:', bookReleaseYear); // For debugging or further use

    };
    return (
    <div id="AddBook">
        <input
            placeholder='Book title...'
            onChange={(e) => setBookTitle(e.target.value)}
        />
        <input
            placeholder='Author name...'
            onChange={(e) => setBookAuthor(e.target.value)}
        />
        {/*  <input placeholder='Release year...' type='number'></input> */}
        <input
            placeholder='Release date...' type='month'
            onChange={handleDateChange}
        />
        <button onClick={addBook}>Submit!</button>
    </div>
    );
}

export default AddBookForm;