import React from 'react';
import BookCard from './BookCard';  // Importamos el componente BookCard
import './css/Bookgrid.css'
import { debug } from '../utils/logger';
function BookGrid({ books }) {
  
  if (!Array.isArray(books)) {
    console.error("Expected 'books' to be an array, but got", typeof books);
    return <div>Books are loading</div>;
  }
  debug("HOALALALALAAL");
  return (
    <div className="book-grid">
      {books.map((book, index) => (
        <BookCard
          key={index}
          title={book.title}
          author={book.author}
          releaseYear={book.releaseYear}
          releaseMonth={book.releaseMonth}
        />
      ))}
    </div>
  );
}

export default BookGrid;