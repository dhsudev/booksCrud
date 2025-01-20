import './App.css';
import { Auth } from './components/Auth';
import BookGrid from './components/BookGrid';
import AddBookForm from './components/AddBookForm';
import useBooks from './hooks/useBooks';



function App() {

  const { books, loading, deleteBook, addBook } = useBooks(); // Call the hook here


  return (
    <div className="App">
      <Auth />
      <AddBookForm addBook={addBook}/>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <BookGrid books={books} deleteBook={deleteBook} /> 
        )}
      </div>
    </div>
  );
}

export default App;
