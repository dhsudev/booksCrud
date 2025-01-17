import './App.css';
import { Auth } from './components/Auth';
import BookGrid from './components/BookGrid';
import AddBookForm from './components/AddBookForm';
import useBooks from './hooks/useBooks';



function App() {

  const { books, loading } = useBooks(); // Call the hook here


  return (
    <div className="App">
      <Auth />
      <AddBookForm />
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <BookGrid books={books} /> // Pass the books array to BookGrid
        )}
      </div>
    </div>
  );
}

export default App;
