import React, { useState, useEffect } from "react";
import MoviesUsers from "./MoviesUsers";

function MyList({ movies, onRemoveMovie }) {
  const [moviesUsers, setMoviesUsers] = useState([]);
  const [showMoviesUsers, setShowMoviesUsers] = useState(false);
  const [setMovies, setSetMovies] = useState([]);

  useEffect(() => {
    // Here you can fetch the movies from an API or other source
    // and then set them using the setMovies function
    const fetchMovies = async () => {
      const response = await fetch("http://localhost:3000/movies");
      const data = await response.json();
      setSetMovies(data);
    };
    fetchMovies();
  }, []);

  const removeMovie = (movie) => {
    if (onRemoveMovie) {
      onRemoveMovie(movie);
    }
  };

  const toggleShowMoviesUsers = () => {
    setShowMoviesUsers(!showMoviesUsers);
  };

  return (
    <div style={{ height: "100%", background: "black"}}>
      <button
        className="btn btn-primary"
        style={{ margin: "10px" }}
        onClick={toggleShowMoviesUsers}
      >
        {showMoviesUsers ? "Hide All Movies" : "Show All Movies"}
      </button>
      {showMoviesUsers && <MoviesUsers movies={moviesUsers} />}
      {movies.length === 0 ? (
        <p>No movies added to your list yet.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
          {movies.map((movie) => (
            <li key={movie.id}>
              <div className="card" style={{ width: "35rem" }}>
                <video
                  className="card-img-top"
                  src={movie.video_url}
                  width="400"
                  height="300"
                  controls
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">{movie.description}</p>
                  <p className="card-text">{movie.duration}</p>
                  <button
                    className="btn btn-danger"
                    style={{
                      background: "#800020",
                      color: "white",
                      padding: "10px 20px",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                    onClick={() => removeMovie(movie)}
                  >
                    Remove from My List
                  </button>
                </div>
              </div>
            </li>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyList;
