import React from 'react';
import './css/BookCard.css';
import { FaTrash } from 'react-icons/fa';

function BookCard({ id, title, author, releaseYear, releaseMonth, deleteBook }) {
  return (
    <div id={id} className="book-card" onClick={() => console.log(id + " clicked")}>
      <h3 className="book-title">{title}</h3>
      <p className="book-author">Author: {author}</p>
      <p className="book-release">
        Released: {releaseMonth} {releaseYear}
      </p>
      <button
        className="delete-btn"
        onClick={() => deleteBook(id)} 
      >
        <FaTrash />
      </button>
    </div>
  );
}

export default BookCard;
