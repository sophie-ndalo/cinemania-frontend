import React, { useState, useEffect } from "react";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="row">
  {movies && Array.isArray(movies) && movies.length > 0 ? (
    movies.map((movie) => (
      <div className="col-lg-3 mb-4" key={movie.id}>
        <div className="card">
          <video src={movie.video_url} className="card-img-top" controls width="400" height="300"></video>
          <div className="card-body">
            <h2 className="card-title">{movie.title}</h2>
            <p className="card-text">{movie.description}</p>
            <p className="card-text">{movie.duration}</p>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p>No movies found.</p>
  )}
</div>

  );
}

export default MovieList;
