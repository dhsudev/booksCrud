import React from 'react';
import BookCard from './BookCard';  // Importamos el componente BookCard
import './css/Bookgrid.css'

function BookGrid({ books, deleteBook }) {
  console.log(books);
  return (
    <div className="book-grid">
      {books.map((book, index) => {
        console.log(book); // Verifica qué datos se pasan a cada tarjeta
        return (
          <BookCard
            id={book.id}
            title={book.title}
            author={book.author}
            releaseYear={book.releaseYear}
            releaseMonth={book.releaseMonth}
            deleteBook={deleteBook}
          />
        );
      })}
    </div>
  );
}

export default BookGrid;