import { useState, useEffect } from "react";

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

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/movies/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setMovies((movies) => movies.filter((movie) => movie.id !== id));
        } else {
          console.log("Failed to delete movie.");
        }
      })
      .catch((error) => console.error(error));
  };

  const handleEdit = (id) => {
    const movie = movies.find((movie) => movie.id === id);

    // Show an input dialog for each field to edit
    const newTitle = prompt("Enter a new title for the movie:", movie.title);
    const newDescription = prompt(
      "Enter a new description for the movie:",
      movie.description
    );
    const newDuration = prompt(
      "Enter a new duration for the movie:",
      movie.duration
    );
    const newVideoUrl = prompt(
      "Enter a new video URL for the movie:",
      movie.videoUrl
    );

    const updatedMovie = {
      ...movie,
      title: newTitle || movie.title,
      description: newDescription || movie.description,
      duration: newDuration || movie.duration,
      videoUrl: newVideoUrl || movie.videoUrl,
    };

    // Send a PATCH request to update the movie on the server
    fetch(`http://localhost:3000/movies/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMovie),
    })
      .then((response) => {
        if (response.ok) {
          // Update the movies array with the updated movie
          setMovies((movies) =>
            movies.map((movie) =>
              movie.id === id ? { ...movie, ...updatedMovie } : movie
            )
          );
        } else {
          console.log("Failed to update movie.");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Movie List</h1>
      <div style={{ display: "flex", flexWrap: "wrap", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ width: "25%", padding: "10px" }}>
           
            <video src={movie.videoUrl} width="100%" height="auto" controls />
            <h2>Tttle : {movie.title}</h2>
            <p>Description : {movie.description.slice(0, 20)}...</p>
            <p>Duration : {movie.duration} minutes</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              
              <button style={{ background: "#7c6e7f", color: "white", padding: "10px 20px", border: "none", borderRadius: "4px", cursor: "pointer", marginTop: "20px" }}onClick={() => handleEdit(movie.id)}>Add to My List</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
