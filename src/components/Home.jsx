
import MovieList from './MovieList';
import React, { useState, useEffect } from 'react';


function Home () {
    const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies/five')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {/* <h2>Five Latest Movies:</h2> */}
      {Array.isArray(movies) && movies.length > 0 ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      ) : (
        <p>No movies available.</p>
      )}
    </div>
  );
}export default Home;