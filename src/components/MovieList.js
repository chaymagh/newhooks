import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({data}) => {
  return (
    <div className='list-box'>
        {
        React.Children.toArray( data.map((movie)=><MovieCard xmovie={movie}/>))
        }
    </div>
  )
}

export default MovieList