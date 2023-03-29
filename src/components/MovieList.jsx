import React, { useState, useEffect } from "react";
import AddMovie from "./AddMovie";
import PopUpForm from "./PopupForm";

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


  const deleteMovie = (id) => {
    fetch(`http://localhost:3000/movies/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        setMovies(movies => movies.filter(movie => movie.id !== id));
      } else {
        console.log("Failed to delete movie.");
      }
    })
    .catch(error => console.error(error));
  };

   const editMovie = (id) => {
    const movie = movies.find(movie => id === id);
    const newTitle =prompt("Enter a title for the movie:", movie.name);
    const newDescription = prompt("Enter a new description for the movie:", movie.description);
    const newDuration = prompt("Enter a new duration for the movie:", movie.duration);
    const newMovieFile = prompt("Enter a new movieFile for the movie:", movie.movieFile);

    const updatedMovie = {
      ...movie,
      title: newTitle || movie.title,
      description: newDescription || movie.description,
      duration: newDuration || movie.duration,
      movieFile: newMovieFile || movie.movieFile,
    };

    fetch(`http://localhost:3000/movies/${id}`,{
      method: 'PATCH',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedMovie)
    })
    .catch(error => console.error(error));
   };

  return (
    <div>
      
      {/* <AddMovie/> */}
    <div className="row" style={{ display: "flex", flexWrap: "wrap"}}>
      {movies && Array.isArray(movies) && movies.length > 0 ? (
        movies.map((movie) => (
          
          <div className="col-4" style={{ marginTop: "30px", borderRadius: "10px", background: "red", height: "500px", width: "500px"}} key={movie.id}>
            <div className="card" style={{ width: "35rem" }}>
            <video className="card-img-top" style={{ display: "flex", marginTop: "10%", marginLeft: "10%"}} src={movie.video_url} width="400" height="300" controls />
            <div className="card-body" style={{ color:"white" }}>
            <h5 className="card-title">{movie.title}</h5>
            <p>{movie.description}</p>
            <p>{movie.duration}</p>
            
              <button className="btn btn-danger" style={{  }} onClick={() => deleteMovie(movie.id)}>Delete</button>
              <button className="btn btn-secondary" style={{ marginRight: "30px" }} onClick={() => editMovie(movie.id)}>Edit</button>
              </div>
              </div>
              </div>
        ))
      ) : (
        <p>No movies found.</p>
      )}
    </div>
    </div>
  );
}

export default MovieList;


