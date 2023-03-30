import React, { useState, useEffect } from "react";

function MovieUsers() {
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
    <div className="row" style={{ display: "flex", flexWrap: "wrap", background: "#0d0907"}}>
      {movies && Array.isArray(movies) && movies.length > 0 ? (
        movies.map((movie) => (
          
       <div className="col-4" style={{ marginTop: "30px", borderRadius: "10px", height: "500px", width: "500px"}} key={movie.id}>
         <div className="card" style={{ width: "35rem" }}>
              <video className="card-img-top" style={{ display: "flex", marginTop: "10%", marginLeft: "10%"}} src={movie.video_url} width="400" height="300" controls />
           <div className="card-body" style={{ color:"white" }}>
             <h5 className="card-title">{movie.title}</h5>
             <p>{movie.description}</p>
             <p>{movie.duration}</p>
          </div>
         </div>
       </div>
        ))
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
} export default MovieUsers;