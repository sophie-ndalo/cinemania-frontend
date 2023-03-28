import logo from './logo.svg';
import './App.css';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
    <AddMovie/>
    <MovieList/>
    </div>
  );
}

export default App;
