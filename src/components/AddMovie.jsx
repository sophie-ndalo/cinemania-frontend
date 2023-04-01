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
      <div className="card" style={{ background :"gray" }}>
      <form style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px", marginTop: "2px" }} onSubmit={addMovie} >
        <label style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
          Title:
          <input style={{ padding: "10px", marginTop: "10px", border: "2px solid", borderColor: "#ccc", borderRadius: "4px", width: "100%"}}
            onChange={handleChange}
            type="text"
            name="title"
            value={movieData.title}
            placeholder="title"
          />
        </label>
        <br />

        <label style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
          Description:
          <textarea style={{ padding: "10px", marginTop: "10px", border: "2px solid", borderColor: "#ccc", borderRadius: "5px", width: "100%"}}
            onChange={handleChange}
            type="text"
            name="description"
            value={movieData.description}
            placeholder="description"
          />
        </label>
        <br />

        <label style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
          Duration:
          <input style={{ padding: "10px", marginTop: "10px", border: "2px solid", borderColor: "#ccc", borderRadius: "4px", width: "100%"}}
            onChange={handleChange}
            type="text"
            name="duration"
            value={movieData.duration}
            placeholder="duration"
          />
        </label>
        <br />

        <label style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
          Movie File:
          <input style={{ marginTop: "20px" }}
            type="file"
            name="video"
            onChange={handleMovieFileChange}
          />
        </label>
        <br />

        <button type="submit" style={{ background: "#4CAF50", color: "white", padding: "10px 20px", border: "none", borderRadius: "4px", cursor: "pointer", marginTop: "20px" }}>Add Movie</button>
      </form>
      </div>
    </div>
  );
}

export default AddMovie;

// form {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 50px;
// }

// label {
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   margin-bottom: 20px;
// }

// input, textarea {
//   padding: 10px;
//   margin-top: 10px;
//   border: 2px solid #ccc;
//   border-radius: 4px;
//   width: 100%;
// }

// input[type="file"] {
//   margin-top: 20px;
// }

// button[type="submit"] {
//   background-color: #4CAF50;
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   margin-top: 20px;
// }
