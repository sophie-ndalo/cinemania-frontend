import { useEffect, useState } from "react";
import React from 'react';
import { Link } from 'react-router-dom';

function MyList(props) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  // const handleEdit = (id) => {
  //   const movie = movies.find((movie) => movie.id === id);

  //   const newTitle = prompt("Enter a new title for the movie:", movie.title);
  //   const newDescription = prompt(
  //     "Enter a new description for the movie:",
  //     movie.description
  //   );
  //   const newDuration = prompt(
  //     "Enter a new duration for the movie:",
  //     movie.duration
  //   );
  //   const newVideoUrl = prompt(
  //     "Enter a new video URL for the movie:",
  //     movie.videoUrl
  //   );

  //   const updatedMovie = {
  //     ...movie,
  //     title: newTitle || movie.title,
  //     description: newDescription || movie.description,
  //     duration: newDuration || movie.duration,
  //     videoUrl: newVideoUrl || movie.videoUrl,
  //   };

  //   // update the movie in the list of movies
  //   const updatedMovies = movies.map((m) => {
  //     if (m.id === id) {
  //       return updatedMovie;
  //     } else {
  //       return m;
  //     }
  //   });

  //   setMovies(updatedMovies);
  // };

  return (
    <div>
      <h1>Movie List</h1>
      <li className="nav-item" style={{ marginTop: "50px", listStyle: "none", display: "flex", flexDirection: "row", alignItems: "center", width: "100%", marginLeft: "10%"}}>
        <Link className="nav-link" to="/mylist">
          My List
        </Link>
      </li>
      <div style={{ display: "flex", flexWrap: "wrap", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ width: "25%", padding: "10px" }}>
            <video src={movie.videoUrl} width="100%" height="auto" controls />
            <h2>Tttle : {movie.title}</h2>
            <p>Description : {movie.description.slice(0, 20)}...</p>
            <p>Duration : {movie.duration} minutes</p>
            {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button style={{ background: "#7c6e7f", color: "white", padding: "10px 20px", border: "none", borderRadius: "4px", cursor: "pointer", marginTop: "20px" }}onClick={() => handleEdit(movie.id)}>Add to My List</button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyList;
