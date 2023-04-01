import React, { useState } from "react";
import MoviesUsers from "./MoviesUsers";
import MyList from "./MyList";

function ToogleFun() {
  const [showMyList, setShowMyList] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShowMyList(!showMyList)}>
        {showMyList ? "Show All Movies" : "Show My List"}
      </button>
      {showMyList ? <MyList /> : <MoviesUsers />}
    </div>
  );
}

export default ToogleFun;
