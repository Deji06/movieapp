import React from "react";
import Form from "./components/Form";
import ShowMovieContent from "./components/ShowMovieContent";
import { useState } from "react";

const App = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  return (
    <>
      <main>
        <h1>my movie app</h1>
      </main>
      <Form searchMovies={searchMovies} setSearchMovies={setSearchMovies} />
      <ShowMovieContent searchMovies={searchMovies} />
    </>
  );
};

export default App;
