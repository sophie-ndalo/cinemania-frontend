import React, { useState, useEffect } from "react";

function EditMovie({ movie, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({
    title: movie.title,
    description: movie.description,
    duration: movie.duration,
    file: null,
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    setIsEditing(false);
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("duration", data.duration);
      formData.append("file", data.file);
      
      const response = await fetch(`http://localhost:3000/movies/${movie.id}`, {
        method: "PATCH",
        body: formData,
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const updatedMovie = await response.json();
      onEdit(updatedMovie.id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTitleChange = (e) => {
    setData({ ...data, title: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setData({ ...data, description: e.target.value });
  };

  const handleDurationChange = (e) => {
    setData({ ...data, duration: e.target.value });
  };

  const handleFileChange = (e) => {
    setData({ ...data, file: e.target.files[0] });
  };

  useEffect(() => {
    setData({
      title: movie.title,
      description: movie.description,
      duration: movie.duration,
      file: null,
    });
  }, [movie]);

  return (
    <div>
      {isEditing ? (
        <>
          <br />
          <input
            className="mt-2 rounded"
            placeholder="Title"
            required
            name="title"
            value={data.title}
            onChange={handleTitleChange}
            style={{ width: "200px", height: "30px" }}
          />
          <br />
          <textarea
            className="mt-2 rounded"
            placeholder="Description"
            required
            name="description"
            value={data.description}
            onChange={handleDescriptionChange}
            style={{ width: "200px", height: "60px" }}
          />
          <br />
          <input
            className="mt-2 rounded"
            placeholder="Duration"
            required
            name="duration"
            value={data.duration}
            onChange={handleDurationChange}
            style={{ width: "200px", height: "30px" }}
          />
          <br />
          <input 
            type="file"
            className="mt-2 rounded"
            name="file"
            accept="image/*, video/*"
            onChange={handleFileChange}
          />
          <br />
          <button onClick={handleSaveClick}>Save</button>
          <br />
        </>
      ) : (
        <button
          style={{ width: "60px", height: "30px", padding: "2px", clolor: "white", padding: "10px 20px", boder: "none", borderRadius: "4px", cursor: "pointer", scrollSnapMarginBottom: "70%", marginRight: "10%" }}
          className="btn btn-dark text-white mx-3 "
          onClick={handleEditClick}
        >
          Edit
        </button>
      )}
    </div>
  );
}

export default EditMovie;

// style={{ background: "#800020", color: "white", padding: "10px 20px", border: "none", borderRadius: "4px", cursor: "pointer", marginTop: "20px", marginRight: "10%" }} onClick={() => deleteMovie(movie.id)}>