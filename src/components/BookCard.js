import React from 'react';
import './css/BookCard.css';  // Aquí importamos el CSS del componente

function BookCard({ title, author, releaseYear, releaseMonth }) {
  return (
    <div className="book-card">
      <h3 className="book-title">{title}</h3>
      <p className="book-author">Author: {author}</p>
      <p className="book-release">
        Released: {releaseMonth} {releaseYear}
      </p>
    </div>
  );
}

export default BookCard;
