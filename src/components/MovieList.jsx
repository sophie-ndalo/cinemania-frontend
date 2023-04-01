import { useState, useEffect } from "react";
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        console.error(error);
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
          console.error("Failed to delete movie.");
        }
      })
      .catch((error) => console.error(error));
  };

  const handleEdit = (id, title, description, duration, videoFile) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("duration", duration);
    formData.append("videoFile", videoFile);

    fetch(`http://localhost:3000/movies/${id}`, {
      method: "PUT",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.error("Failed to update movie.");
          throw new Error("Failed to update movie.");
        }
      })
      .then((updatedMovie) => {
        setMovies((movies) =>
          movies.map((movie) =>
            movie.id === updatedMovie.id ? updatedMovie : movie
          )
        );
      })
      .catch((error) => console.error(error));
  };

  return (
    <div style={{ background: "gray" }}>
      <AddMovie />
      <h1 style={{ marginBottom: "30px" }}>Movie List</h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {movies.map((movie) => (
          <div key={movie.id} style={{ width: "25%", padding: "10px" }}>
            <video src={movie.videoUrl} width="100%" height="auto" controls />
            <h2>Title : {movie.title}</h2>
            <p>Description : {movie.description.slice(0, 20)}...</p>
            <p>Duration : {movie.duration}</p>
            <div>
              <button style={{ background: "#BA110C", color: "white", padding: "10px 20px", border: "none", borderRadius: "4px", cursor: "pointer", marginTop: "20px" }}onClick={() => handleEdit(movie.id)}>Delete</button>
            </div>
            <EditMovie
              key={movie.id}
              movie={movie}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
