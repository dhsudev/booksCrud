import React from 'react';
import './css/BookCard.css';  // Aquí importamos el CSS del componente
import { FaTrash } from 'react-icons/fa';

function BookCard({ id, title, author, releaseYear, releaseMonth, deleteBook }) {
  return (
    <div className="book-card">
      <h3 className="book-title">{title}</h3>
      <p className="book-author">Author: {author}</p>
      <p className="book-release">
        Released: {releaseMonth} {releaseYear}
      </p>
      <button
        className="delete-btn"
        onClick={() => deleteBook(id)} // Call the delete function with the book ID
      >
        <FaTrash />
      </button>
    </div>
  );
}

export default BookCard;
