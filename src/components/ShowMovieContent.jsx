import React from 'react'
import { useState } from 'react'
import NotFoundPage from './NotFoundPage';

const ShowMovieContent = ({searchMovies, data}) => {
  // const{showMovie, setShowMovie} = useState(data.Error)

  console.log({searchMovies})
  // console.log({setShowMovie});
  return (
    <>
    {searchMovies?.map((movie) => (
      <div className="movie--container" style={{}}>
        <div className="movie--grid">
          <img src={movie.Poster} alt={movie.Title} />
          <p> Title: {movie.Title}</p>
          <p> Year: {movie.Year}</p>
          <p>Type: {movie.Type}</p>
        </div> 
      </div> 
      ))
        } 

   








      
  {/* {setShowMovie ? movies?.map((movie) => (
  <div className="movie--container">
     <div className="movie--grid">
       <img src={movie.Poster} alt={movie.Title} />
       <p> Title: {movie.Title}</p>
       <p> Year: {movie.Year}</p>
       <p>Type: {movie.Type}</p>
     </div> 
   </div> )): <p>movie not found</p> }  */}
    </>
  )
  };
  

export default ShowMovieContent;

