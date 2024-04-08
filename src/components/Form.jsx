import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
// import NotFoundPage from "./NotFoundPage";

// state to search movies on the Api
const Form = ({searchMovies, setSearchMovies}) => {
  const url = `https://www.omdbapi.com`;
  const API_KEY = "c8bae7bb";

  // states
  const [searchString, setsearchString] = useState('')
  // const [notFound, setNotFound] = useState(false)
  


  // functions
  const handleChanges = (event) => {
      setsearchString(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const dataFromApi = async () => {
    try {
      const res = await axios.get(`${url}/?s=${searchString}&apikey=${API_KEY}`)
      const data = res.data
      setSearchMovies(data?.Search)
      // if(data.Error) { 
      //   console.log('not found');
      //   // setNotFound(true)
      // //  return <NotFoundPage />
      // }
      // else {
      //   console.log(data);
      //  return setSearchMovies(data.Search)

      // }
      
    } catch (error) {
      console.log(error);
    }
   
  }

  useEffect((data) => {
      searchString !== '' && dataFromApi()
      // searchString === data.Error && setNotFound(false)
  },[searchString])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchMovies">search for what to download here</label>
        <input type="text" placeholder="search moviez...." value={searchString} onChange={handleChanges} />
       
      </form>

      {/* {notFound && <NotFoundPage />} */}
    </>
  );
};

export default Form;
// (`${url}/?s=${searchString}&apikey=${API_KEY}`)