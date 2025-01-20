import { useState, useEffect } from 'react';
import { getBooks } from '../services/booksService';

import { bookCollectionRef, db } from '../config/firebase';
import { addDoc, deleteDoc, doc } from 'firebase/firestore';
import { error, info, success } from '../utils/logger';


const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    try {
      const booksFromDb = await getBooks();
      setBooks(booksFromDb || []);
    } catch (err) {
      console.error('Failed to fetch books:', err);
    } finally {
      setLoading(false);
    }
  };
  const addBook = async (newBook) => {
    //setLoading(true);
    try {
      info("Trying to add book to database...");
      console.log(newBook)
      await addDoc(bookCollectionRef, newBook);
      success("Added book suscessfuly")
      setBooks((prevBooks) => [...prevBooks, newBook]);
    } catch (err) {
      error("Error while adding book to database:");
      console.log(err);
    } finally {
      setLoading(false)
    }
  }
  const deleteBook = async (id) => {
    setLoading(true);
    try {
      if(!id)
        id = 
      console.log(id);
      await deleteDoc(doc(db, 'books', id)); // Firebase delete logic
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id)); // Optimistic update
    } catch (err) {
      console.error('Failed to delete book:', err);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return { books, loading, fetchBooks, deleteBook, addBook };
};

export default useBooks;