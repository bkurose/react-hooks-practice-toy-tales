import React from "react";

function ToyCard({ name, image, likes ,toy, toyList, setToyList }) {
  function handleDelete() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(() => {
      const list = toyList.filter(item => toy.id !== item.id)
      setToyList(list)
    } )
  }

  function handleLikeClick() {
    const newLikes = (toy.likes + 1)
    const updatedToy = {...toy, likes: newLikes}

    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedToy)
    })
    .then(res => res.json())
    .then(() => {
      const list = toyList.map(item =>{
        if(item.id === toy.id){return updatedToy}
        else{return item}
      })
      setToyList(list)
    })
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLikeClick} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
