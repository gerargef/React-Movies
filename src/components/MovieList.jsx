import React from 'react'
import MovieItem from './MovieItem'

function MovieList(props) {
  return (
    <div className='movie-list'>
      {props.films 
      ?
      props.films.map(film =>
        <MovieItem {...film}  key={film.imdbID}/>)
        :
        <h3>Movies Not Found</h3>
      }
    </div>
  )}

export default MovieList