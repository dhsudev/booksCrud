import { useState, useEffect } from 'react';
import { getBooks } from '../services/booksService';

const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksFromDb = await getBooks();
        setBooks(booksFromDb);
      } catch (err) {
        console.error('Failed to fetch books:', err);
        setBooks([]);  // Set to an empty array if error occurs
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return { books, loading };
};
export default useBooks;