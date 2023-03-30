import logo from './logo.svg';
import './App.css';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import Home from './components/Home';
import Navbar from './components/NavBar';
import { Routes, Route} from 'react-router-dom';
import MovieUsers from './components/MoviesUsers';
import LoginForm from './components/LoginForm';
import SignupLogin from './components/SignupLogin';

function App() {
  return (
    <div className="App">
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movielist' element={<MovieList/>}/>
        <Route path='/moviesusers' element={<MovieUsers/>}/>
       
        <Route path='/signuplogin' element={<SignupLogin/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
