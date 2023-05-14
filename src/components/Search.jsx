import React from 'react'
import StarsRating from './StartsRating'

const Search = ({handleRate,handletext,rating,text}) => {
  return (
    <div className='search-box'>
        <span>
            <StarsRating handleRate={handleRate} rating={rating}/>
        </span>
        <span className='search'>
            <input type="text" value={text} onChange={e=>handletext(e.target.value)} />
        </span>
    </div>
  )
}

export default Search