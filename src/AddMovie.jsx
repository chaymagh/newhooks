import React, { useState } from "react";
import Modal from "react-modal";
import StarsRating from "./components/StartsRating";

const AddMovie = ({handleAdd}) => {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [date, setDate] = useState("")
  const [rating, setRating] = useState(1)
    const handleRate=(x)=>setRating(x)
    const handleSubmit=(e)=>{
      e.preventDefault()
        const film ={
            id:Math.random(),name,date,rating,image
        }
        handleAdd(film)
    }
  const customStyles = {
    content: {
      backdropFilter: "blur(1px)",
      border: "1px solid rgba(0, 0, 0, 0.537)",
      background: "transparent",
      width: "60%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  Modal.setAppElement("#root");
  return (
    <div className="add-btn-box">
      <button className="add-btn" onClick={openModal}>
        Add Movie
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <label>Movie Name</label>
          <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
          <label>Movie Poster</label>
          <input type="url" placeholder="Drop your image link" value={image} onChange={e=>setImage(e.target.value)}/>
          <StarsRating rating={rating} handleRate={handleRate}/>
          <input type="date" value={date} onChange={e=>setDate(e.target.value)}/>
          <div>
            <button type="submit">Confirm</button>
            <button>Cancel</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddMovie;
