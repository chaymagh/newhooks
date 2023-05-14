import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarsRating = ({ rating,handleRate }) => {
    const [Hover, setHover] = useState(null)
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const stars = i + 1;
        return (
          <label>
            <input type="radio" name="stars" value={rating} onClick={()=>handleRate(stars)}/>
            <FaStar
              id="rating"
              color={stars <= (Hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={()=>setHover(stars)}
              onMouseLeave={()=>setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};
StarsRating.defaultProps={
  handleRate:()=>{}
}
export default StarsRating;
