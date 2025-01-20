import { useState } from "react";
import './css/Form.css'
import { IoCreate } from "react-icons/io5";

function AddBookForm({addBook}) {
    const [bookTitle, setBookTitle] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [bookReleaseYear, setBookReleaseYear] = useState(0);
    const [bookReleaseMonth, setBookReleaseMonth] = useState("");

    const monthAbbreviations = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    
    const handleDateChange = (e) => {
        const monthValue = e.target.value;
        const month = monthAbbreviations[Number(monthValue.split('-')[1])];
        const year = monthValue.split('-')[0];
        setBookReleaseMonth(month);
        setBookReleaseYear(Number(year));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = {
          title: bookTitle,
          author: bookAuthor,
          releaseYear: bookReleaseYear,
          releaseMonth: bookReleaseMonth,
        };
        addBook(newBook);
        setBookTitle('');
        setBookAuthor('');
        setBookReleaseYear('');
        setBookReleaseMonth('');
      };

    return (
    <form id="add-book-form" className="form" onSubmit={handleSubmit}>
        <h2>Insert a new book</h2>
        <label>Name of the book</label>
        <input
            placeholder='Book title...'
            onChange={(e) => setBookTitle(e.target.value)}
            required
        />
        <label>Author of the book</label>
        <input
            placeholder='Author name...'
            onChange={(e) => setBookAuthor(e.target.value)}
            required
        />
        <label>Release date</label>
        <input
            placeholder='Release date...' type='month'
            onChange={handleDateChange}
        />
        <button className="submit-btn" type="submit"><IoCreate/> Save Book </button>
    </form>
    );
}

export default AddBookForm;