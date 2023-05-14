import React from 'react'
import StarsRating from './StartsRating'

const MovieCard = ({xmovie}) => {
  return (
    <div className='movie-card'>            
    <img id='img' src={xmovie.image} alt=""/>
    <div className="movie-content">
    <div className='title'>{xmovie.name}</div>
    <StarsRating rating={xmovie.rating}/>
    <div className='date'>{xmovie.date}</div>
    </div>
    </div>
  )
}

export default MovieCard