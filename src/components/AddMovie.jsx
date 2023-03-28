import React, { useState } from "react";

function AddMovie() {
  const [movieData, setMovieData] = useState({
    title: "",
    description: "",
    duration: "",
    video: null,
  });

  const handleChange = (e) => {
    setMovieData({
      ...movieData,
      [e.target.name]: e.target.value,
    });
  };

  const handleMovieFileChange = (e) => {
    setMovieData({
      ...movieData,
      video: e.target.files[0],
    });
  };

  const addMovie = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", movieData.title);
    formData.append("description", movieData.description);
    formData.append("duration", movieData.duration);
    formData.append("video", movieData.video);

    fetch("http://localhost:3000/movies", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        alert("Movie Added Successfully!");
        window.location.href = "/movies";
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Add Movie</h1>
      <form onSubmit={addMovie}>
        <label>
          Title:
          <input
            onChange={handleChange}
            type="text"
            name="title"
            value={movieData.title}
            placeholder="title"
          />
        </label>
        <br />

        <label>
          Description:
          <textarea
            onChange={handleChange}
            type="text"
            name="description"
            value={movieData.description}
            placeholder="description"
          />
        </label>
        <br />

        <label>
          Duration:
          <input
            onChange={handleChange}
            type="text"
            name="duration"
            value={movieData.duration}
            placeholder="duration"
          />
        </label>
        <br />

        <label>
          Movie File:
          <input
            type="file"
            name="video"
            onChange={handleMovieFileChange}
          />
        </label>
        <br />

        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
